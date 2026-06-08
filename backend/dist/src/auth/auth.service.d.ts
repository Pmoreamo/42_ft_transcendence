import { PrismaService } from '../prisma.services';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    UserRegistration(dto: RegisterDto): Promise<{
        email: string;
        username: string;
        password: string | null;
        id: string;
        avatar: string | null;
        createdAt: Date;
    }>;
}
