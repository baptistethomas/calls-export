import { Injectable } from '@nestjs/common';
import { Seller } from './seller.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SellerService {
    constructor(
        @InjectRepository(Seller)
        public sellerRepository: Repository<Seller>,
    ) {}

    async listSeller(): Promise<Array<Seller>> {
        return await this.sellerRepository.find();
    }
}
