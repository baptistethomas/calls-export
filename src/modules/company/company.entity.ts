import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Prospect } from '../prospect/prospect.entity';
import { Seller } from '../seller/seller.entity';

@Entity('companies')
export class Company extends BaseEntity {
    @OneToMany(() => Prospect, (prospect) => prospect.company)
    public prospects: Prospect[];

    @OneToMany(() => Seller, (seller) => seller.company)
    public sellers: Seller[];

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        nullable: false,
    })
    name: string;
}
