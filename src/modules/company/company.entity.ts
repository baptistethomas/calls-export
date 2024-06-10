import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Prospect } from '../prospect/prospect.entity';

@Entity('companies')
export class Company extends BaseEntity {
    @OneToMany(() => Prospect, (prospect) => prospect.company)
    public prospects: Prospect[];

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        nullable: false,
    })
    name: string;
}
