import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Company } from './modules/company/company.entity';
import { Prospect } from './modules/prospect/prospect.entity';
import { Meeting } from './modules/meeting/meeting.entity';
import { Seller } from './modules/seller/seller.entity';
import { Record } from './modules/record/record.entity';

export default class MainSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ) {
        const companyFactory = factoryManager.get(Company);
        const company = await companyFactory.save();

        const sellerFactory = factoryManager.get(Seller);
        const seller = await sellerFactory.save();

        const prospectFactory = factoryManager.get(Prospect);
        const prospect = await prospectFactory.save({
            company: company,
        });

        const recordFactory = factoryManager.get(Record);
        const record = await recordFactory.save();

        const meetingFactory = factoryManager.get(Meeting);
        await meetingFactory.save({
            prospect: prospect,
            seller: seller,
            record: record,
        });
    }
}
