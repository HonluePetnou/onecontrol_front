/**
 * Environment variables configuration with validation
 * Centralizes all environment variable access with type safety
 */

function getEnvVariable(key: string, required: boolean = true): string {
  const value = process.env[key];

  if (!value && required) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value || '';
}

export const env = {
  // Database Configuration
  database: {
    url: getEnvVariable('DATABASE_URL'),
    host: getEnvVariable('DB_HOST'),
    port: parseInt(getEnvVariable('DB_PORT') || '3306'),
    user: getEnvVariable('DB_USER'),
    password: getEnvVariable('DB_PASSWORD'),
    name: getEnvVariable('DB_NAME'),
  },

  // Genuka API Configuration
  genuka: {
    url: getEnvVariable('GENUKA_URL'),
    clientId: getEnvVariable('GENUKA_CLIENT_ID'),
    clientSecret: getEnvVariable('GENUKA_CLIENT_SECRET'),
    redirectUri: getEnvVariable('GENUKA_REDIRECT_URI'),
  },

  // Application Configuration
  app: {
    env: getEnvVariable('NODE_ENV', false) || 'development',
    port: parseInt(getEnvVariable('PORT', false) || '3000'),
  },

  // Security Configuration
  security: {
    tlsRejectUnauthorized: getEnvVariable('NODE_TLS_REJECT_UNAUTHORIZED', false) === '0' ? false : true,
  },
} as const;

// Validation helper
export function validateEnv() {
  try {
    Object.values(env);
    console.log('✓ Environment variables validated successfully');
  } catch (error) {
    console.error('✗ Environment validation failed:', (error as Error).message);
    // Avoid calling Node-specific APIs (like process.exit) when running
    // in Edge runtime (middleware). Re-throw the error so callers can
    // handle it appropriately instead of terminating the runtime.
    if (typeof process !== 'undefined' && typeof (process as any).exit === 'function') {
      // Node environment: exit with non-zero code
      (process as any).exit(1);
    }

    // Edge or other non-Node runtimes: throw to surface the problem to the
    // caller (middleware, serverless) without calling unsupported APIs.
    throw error;
  }
}
