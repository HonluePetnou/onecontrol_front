import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware must not import server-only modules (Prisma, Node APIs).
// Verify the JWT session cookie directly here using jose so the middleware
// runs in the Edge runtime without pulling in Prisma-generated client code.
// You can disable auth checks in development by setting DISABLE_AUTH=true
const AUTH_DISABLED = String(process.env.DISABLE_AUTH || '').toLowerCase() === 'true'
const publicRoutes = ['/login', '/register', '/forgot-password', '/reset-password', '/']

async function verifyJwtToken(token: string | undefined) {
  if (!token) return null
  try {
    const { jwtVerify } = await import('jose')
    const secretStr = process.env.GENUKA_CLIENT_SECRET || process.env.JWT_SECRET
    if (!secretStr) {
      // In dev, if secret missing, treat as unauthenticated but don't throw
      console.warn('JWT secret missing in middleware; skipping verification')
      return null
    }
    const secret = new TextEncoder().encode(secretStr)
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch (err) {
    console.warn('JWT verification failed in middleware:', err)
    return null
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Short-circuit auth in development when explicitly disabled.
  if (AUTH_DISABLED) {
    return NextResponse.next()
  }

  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))

  const token = request.cookies.get('session')?.value
  const payload = await verifyJwtToken(token)
  const authenticated = !!payload

  if (!isPublicRoute && !authenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isPublicRoute && authenticated && pathname !== '/reset-password') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
