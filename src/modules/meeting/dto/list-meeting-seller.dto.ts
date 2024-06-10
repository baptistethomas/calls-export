import { IsNotEmpty, IsNumber } from 'class-validator';

export class ListMeetingSellerDto {
    @IsNotEmpty()
    @IsNumber()
    public readonly sellerId: number;
}
