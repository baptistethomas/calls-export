import { setSeederFactory } from 'typeorm-extension';
import { Faker } from '@faker-js/faker';
import { Seller } from './seller.entity';

export const SellerFactory = setSeederFactory(Seller, (faker: Faker) => {
    const seller = new Seller();
    seller.firstName = faker.person.firstName();
    seller.lastName = faker.person.lastName();
    seller.email = faker.internet.email();
    seller.phoneNumber = faker.phone.number();
    return seller;
});
