import { PrismaService } from "../prisma.service";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    UserRegistration(email: string, name: string): Promise<any>;
}
