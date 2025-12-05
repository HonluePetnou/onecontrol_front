// OAuth service removed. Provide a stubbed class to avoid runtime import errors.
export class OAuthService {
  async handleCallback(_params: {
    code: string;
    companyId: string;
    timestamp: string;
    hmac: string;
    redirectTo: string;
  }) {
    throw new Error("OAuth removed from this project");
  }

  validateCallbackParams(params: {
    code?: string | null;
    companyId?: string | null;
    timestamp?: string | null;
    hmac?: string | null;
  }) {
    // Always invalid because OAuth flow is disabled
    return false;
  }
}
