import { IsNotEmpty, IsNumber } from 'class-validator';

export class ListMeetingCompanyDto {
    @IsNotEmpty()
    @IsNumber()
    public companyId: number;
}
