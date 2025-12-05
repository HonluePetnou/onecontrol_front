// Prisma/database removed. Provide a stubbed service to avoid runtime imports.
import type { CompanyCreate } from "@/types/company";

export class CompanyDBService {
  async findByAccessToken(_accessToken: string) {
    return null;
  }

  async upsertCompany(_data: CompanyCreate) {
    throw new Error("Database access removed from this project");
  }

  async findByCompanyId(_id: string) {
    return null;
  }

  async findByHandle(_handle: string) {
    return null;
  }

  async updateById(_id: string, _data: Partial<CompanyCreate>) {
    throw new Error("Database access removed from this project");
  }
}
