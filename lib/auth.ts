// Authentication helpers removed per user request.
// Export minimal stub implementations so existing imports do not throw.

export async function createSession(_userId: string) {
  return null
}

export async function verifySession() {
  return null
}

export async function deleteSession() {
  return null
}

export async function requireAuth() {
  throw new Error('Authentication disabled')
}

export async function getAuthenticatedCompany() {
  return null
}

export async function hashPassword(_password: string): Promise<string> {
  throw new Error('Authentication disabled')
}

export async function verifyPassword(_password: string, _hash: string): Promise<boolean> {
  throw new Error('Authentication disabled')
}
