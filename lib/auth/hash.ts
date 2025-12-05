import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function deleteSession() {
  // Placeholder: session deletion is handled by cookie deletion elsewhere (destroySession)
  return;
}

export default { hashPassword, verifyPassword, deleteSession };
