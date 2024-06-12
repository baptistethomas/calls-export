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
import { ERecordFormat } from './enumerator/record-format.enum';
import { Meeting } from '../meeting/meeting.entity';

@Entity('records')
export class Record extends BaseEntity {
    @ManyToOne(() => Meeting, (meeting) => meeting.record)
    @JoinColumn([{ name: 'record_id', referencedColumnName: 'id' }])
    public meeting: Meeting;

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        nullable: false,
    })
    format: ERecordFormat;

    @Column({
        nullable: false,
    })
    file: string;

    @Column({
        nullable: false,
    })
    transcript: string;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
