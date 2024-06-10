import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingService } from './meeting.service';
import { Meeting } from './meeting.entity';
import { MeetingController } from './meeting.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Meeting])],
    providers: [MeetingService],
    controllers: [MeetingController],
})
export class MeetingModule {}
