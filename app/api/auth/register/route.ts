import { NextRequest, NextResponse } from 'next/server';

// Registration endpoint removed when Prisma/auth were removed.
export async function POST(_request: NextRequest) {
  return NextResponse.json(
    { error: 'Registration endpoint removed (auth disabled)' },
    { status: 501 }
  );
}
