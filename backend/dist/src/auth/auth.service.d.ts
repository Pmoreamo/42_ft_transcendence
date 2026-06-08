import { PrismaService } from '../prisma.services';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    UserRegistration(dto: RegisterDto): Promise<{
        id: string;
        email: string;
        username: string;
        password: string | null;
        avatar: string | null;
        createdAt: Date;
    }>;
}
