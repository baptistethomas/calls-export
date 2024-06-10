import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { Prospect } from '../prospect/prospect.entity';
import { Seller } from '../seller/seller.entity';
import { EMeetingType } from './enumerator/meeting-type.enum';
import { EMeetingVideoProvider } from './enumerator/meeting-video-provider.enum';
import { IMeetingSummary } from './interface/meeting-summary.interface';
import { EMeetingDirection } from './enumerator/meeting-direction.enum';
import { Record } from '../record/record.entity';

@Entity('meetings')
export class Meeting extends BaseEntity {
    @OneToOne(() => Prospect, { cascade: true })
    @JoinColumn([{ name: 'prospect_id', referencedColumnName: 'id' }])
    public prospect: Prospect;

    @OneToOne(() => Seller, { cascade: true })
    @JoinColumn([{ name: 'seller_id', referencedColumnName: 'id' }])
    public seller: Seller;

    @OneToOne(() => Record, { cascade: true })
    @JoinColumn([{ name: 'record_id', referencedColumnName: 'id' }])
    public record: Record;

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        nullable: false,
    })
    title: string;

    @Column({
        nullable: false,
    })
    type: EMeetingType;

    @Column({
        nullable: false,
    })
    direction: EMeetingDirection;

    @Column({
        nullable: false,
    })
    audio: boolean;

    @Column({
        nullable: false,
    })
    video: boolean;

    @Column({ nullable: true, name: 'video_provider', default: null })
    public videoProvider: EMeetingVideoProvider;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;

    @Column({
        nullable: false,
    })
    duration: number;

    @Column('jsonb')
    summary: IMeetingSummary;

    @Column({
        nullable: false,
        name: 'prospect_id',
    })
    prospectId: number;

    @Column({
        nullable: false,
        name: 'seller_id',
    })
    sellerId: number;

    @Column({
        nullable: false,
        name: 'record_id',
    })
    recordId: number;
}
