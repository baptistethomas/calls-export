import { setSeederFactory } from 'typeorm-extension';
import { Prospect } from './prospect.entity';
import { Faker } from '@faker-js/faker';
import { Company } from '../company/company.entity';

export const ProspectFactory = setSeederFactory(
    Prospect,
    (faker: Faker, context?: { company: Company }) => {
        const prospect = new Prospect();
        if (context?.company) prospect.company = context.company;
        prospect.firstName = faker.person.firstName();
        prospect.lastName = faker.person.lastName();
        prospect.email = faker.internet.email();
        prospect.job = faker.person.jobTitle();
        prospect.phoneNumber = faker.phone.number();
        return prospect;
    },
);
