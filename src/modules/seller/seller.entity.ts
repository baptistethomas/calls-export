import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from '../company/company.entity';

@Entity('sellers')
export class Seller extends BaseEntity {
    @OneToOne(() => Company, { cascade: true })
    @JoinColumn([{ name: 'company_id', referencedColumnName: 'id' }])
    public company: Company;

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        nullable: false,
    })
    firstName: string;

    @Column({
        nullable: false,
    })
    lastName: string;

    @Column({
        nullable: false,
    })
    email: string;

    @Column({
        nullable: false,
    })
    phoneNumber: string;
}
