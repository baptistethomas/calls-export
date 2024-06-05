import { Module } from '@nestjs/common';
import { configService } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
    controllers: [],
    providers: [],
})
export class AppModule {}
