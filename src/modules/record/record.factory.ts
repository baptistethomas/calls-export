import { setSeederFactory } from 'typeorm-extension';
import { Faker } from '@faker-js/faker';
import { Record } from './record.entity';
import { ERecordFormat } from './enumerator/record-format.enum';
import { getRandomEnumValue } from '../../shared/utils/enum-manipulation';

export const RecordFactory = setSeederFactory(Record, (faker: Faker) => {
    const record = new Record();
    record.file = 'random-record-filename';
    record.transcript = faker.lorem.paragraph(50);
    record.format = getRandomEnumValue(ERecordFormat);
    return record;
});
