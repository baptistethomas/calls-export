import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Meeting } from './meeting.entity';

export default class MeetingSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ) {
        const meetingFactory = factoryManager.get(Meeting);
        await meetingFactory.saveMany(5);
    }
}
