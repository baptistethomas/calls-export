import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        public companyRepository: Repository<Company>,
    ) {}

    async listCompany(): Promise<Array<Company>> {
        return await this.companyRepository.find();
    }
}
