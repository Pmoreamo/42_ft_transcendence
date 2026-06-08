import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        email: string;
        username: string;
        password: string | null;
        id: string;
        avatar: string | null;
        createdAt: Date;
    }>;
}
