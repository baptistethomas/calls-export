import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
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

    @Column({
        nullable: false,
    })
    address: string;

    @Column({
        nullable: false,
        name: 'zip_code',
    })
    zipCode: string;

    @Column({
        nullable: false,
    })
    country: string;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
