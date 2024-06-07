import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingService } from './meeting.service';
import { Meeting } from './meeting.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Meeting])],
    providers: [MeetingService],
    controllers: [],
})
export class MeetingModule {}
