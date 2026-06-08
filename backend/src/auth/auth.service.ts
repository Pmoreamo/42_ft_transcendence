import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    async UserRegistration(email: string, name: string){
        return this.prisma.user.create({
            data: {
                email: email,
                name: name,
            },
        });
    }
}
