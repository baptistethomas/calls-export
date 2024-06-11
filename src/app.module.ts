import { Module } from '@nestjs/common';
import { MeetingModule } from './modules/meeting/meeting.module';
import { CompanyModule } from './modules/company/company.module';
import { ProspectModule } from './modules/prospect/prospect.module';
import { SellerModule } from './modules/seller/seller.module';
import { RecordModule } from './modules/record/record.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        DatabaseModule,
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
