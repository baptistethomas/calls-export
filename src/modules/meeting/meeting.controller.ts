import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { Meeting } from './meeting.entity';
import { MeetingService } from './meeting.service';
import { ListMeetingSellerDto } from './dto/list-meeting-seller.dto';
import { ListMeetingCompanyDto } from './dto/list-meeting-company.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Meeting')
@Controller('meeting')
export class MeetingController {
    constructor(private readonly meetingService: MeetingService) {}

    @Get('seller/:sellerId')
    @ApiOperation({ summary: 'List Meetings for a Seller' })
    @ApiParam({ name: 'sellerId', type: 'number' })
    @ApiResponse({
        status: 200,
        description: 'Meetings list for Seller sent',
    })
    @ApiResponse({ status: 400, description: 'DTO not suits' })
    @UsePipes(
        new ValidationPipe({
            transform: true,
            transformOptions: { enableImplicitConversion: true },
        }),
    )
    async listMeetingSeller(
        @Param(ValidationPipe) listMeetingSellerDto: ListMeetingSellerDto,
    ): Promise<Array<Meeting>> {
        try {
            return await this.meetingService.listMeetingSeller(
                listMeetingSellerDto,
            );
        } catch (error) {
            throw new HttpException(
                error.message,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    @Get('company/:companyId')
    @ApiOperation({ summary: 'List Meetings for a Company' })
    @ApiParam({ name: 'companyId', type: 'number' })
    @ApiResponse({
        status: 200,
        description: 'Meetings list for Company sent',
    })
    @ApiResponse({ status: 400, description: 'DTO not suits' })
    @UsePipes(
        new ValidationPipe({
            transform: true,
            transformOptions: { enableImplicitConversion: true },
        }),
    )
    async listMeetingCompany(
        @Param(ValidationPipe) listMeetingCompanyDto: ListMeetingCompanyDto,
    ): Promise<Array<Meeting>> {
        try {
            return await this.meetingService.listMeetingCompany(
                listMeetingCompanyDto,
            );
        } catch (error) {
            throw new HttpException(
                error.message,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
