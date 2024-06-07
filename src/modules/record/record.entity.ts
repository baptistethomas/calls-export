import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ERecordFormat } from './enumerator/record-format.enum';

@Entity('records')
export class Record extends BaseEntity {
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
}
