import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SellerService } from './seller.service';
import { Seller } from './seller.entity';

@ApiTags('Sellers')
@Controller('sellers')
export class SellerController {
    constructor(private readonly sellerService: SellerService) {}

    @Get()
    @ApiOperation({ summary: 'List Sellers' })
    @ApiResponse({
        status: 200,
        description: 'Sellers list sent',
    })
    async listSeller(): Promise<Array<Seller>> {
        return await this.sellerService.listSeller();
    }
}
