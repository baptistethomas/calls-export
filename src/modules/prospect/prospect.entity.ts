import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Company } from '../company/company.entity';

@Entity('prospects')
export class Prospect extends BaseEntity {
    @ManyToOne(() => Company, (company) => company.prospects)
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
    job: string;

    @Column({
        nullable: false,
    })
    phoneNumber: string;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
