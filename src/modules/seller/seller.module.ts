import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerService } from './seller.service';
import { Seller } from './seller.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Seller])],
    providers: [SellerService],
    controllers: [],
})
export class SellerModule {}
