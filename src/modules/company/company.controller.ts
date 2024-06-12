import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get()
    @ApiOperation({ summary: 'List Companies' })
    @ApiResponse({
        status: 200,
        description: 'Companies list sent',
    })
    async listCompany(): Promise<Array<Company>> {
        return await this.companyService.listCompany();
    }
}
