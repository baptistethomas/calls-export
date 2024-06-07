import { Module } from '@nestjs/common';
import { configService } from '../config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingModule } from './modules/meeting/meeting.module';
import { CompanyModule } from './modules/company/company.module';
import { ProspectModule } from './modules/prospect/prospect.module';
import { SellerModule } from './modules/seller/seller.module';
import { RecordModule } from './modules/record/record.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        CompanyModule,
        ProspectModule,
        MeetingModule,
        SellerModule,
        RecordModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
