import { Injectable } from '@nestjs/common';
import { Meeting } from './meeting.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ListMeetingSellerDto } from './dto/list-meeting-seller.dto';
import { ListMeetingCompanyDto } from './dto/list-meeting-company.dto';

@Injectable()
export class MeetingService {
    constructor(
        @InjectRepository(Meeting)
        public meetingRepository: Repository<Meeting>,
    ) {}

    async listMeetingSeller(
        listMeetingSellerDto: ListMeetingSellerDto,
    ): Promise<Array<Meeting>> {
        return await this.meetingRepository.find({
            relations: ['record'],
            where: { sellerId: listMeetingSellerDto.sellerId },
        });
    }

    async listMeetingCompany(
        listMeetingCompanyDto: ListMeetingCompanyDto,
    ): Promise<Array<Meeting>> {
        return await this.meetingRepository.find({
            relations: ['record'],
            where: { sellerId: listMeetingCompanyDto.companyId },
        });
    }
}
