import {Module, Global } from '@nestjs/common'
import { PrismaService } from 'src/prisma.services'

@Global()
@Module({ 
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}