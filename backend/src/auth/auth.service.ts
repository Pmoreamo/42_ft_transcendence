import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.services';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService 
{
    constructor(private prisma: PrismaService) {}
    async UserRegistration(dto: RegisterDto)
    {
        const UserExist =  await this.prisma.user.findFirst(
        {
            where: 
            {
                OR: 
                [
                    {email: dto.email}, 
                    {username: dto.username}
                ]
            }
        });
        if (UserExist) 
        {
            throw new ConflictException('correu ja existeix')
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(dto.password, salt);
        const newUser = await this.prisma.user.create(
        {
            data: 
            {
                email: dto.email, 
                username: dto.username,  
                password: hashedPassword,
            },
        });
        delete(newUser as any).password;
        return newUser
    }
}
