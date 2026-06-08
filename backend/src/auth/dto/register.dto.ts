import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator'

export class RegisterDto
{
    @IsEmail({}, {message: 'temp'})
    @IsNotEmpty({message: 'temp'})
    email: string;

    @IsString({message: 'temp'})
    @IsNotEmpty({message: 'temp'})
    username: string;

    @IsString()
    @MinLength(6, {message: 'temp'})
    password: string;
}

