import { setSeederFactory } from 'typeorm-extension';
import { Faker } from '@faker-js/faker';
import { Company } from './company.entity';

export const CompanyFactory = setSeederFactory(Company, (faker: Faker) => {
    const company = new Company();
    company.name = faker.company.name();
    company.address = faker.location.streetAddress();
    company.zipCode = faker.location.zipCode();
    company.country = faker.location.country();
    return company;
});
