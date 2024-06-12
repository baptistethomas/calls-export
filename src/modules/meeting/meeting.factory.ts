import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Meeting } from './meeting.entity';
import { EMeetingDirection } from './enumerator/meeting-direction.enum';
import { EMeetingType } from './enumerator/meeting-type.enum';
import { EMeetingVideoProvider } from './enumerator/meeting-video-provider.enum';
import { IMeetingSummaryNextSteps } from './interface/meeting-summary-next-steps.interface';
import { IMeetingSummaryObjections } from './interface/meeting-summary-objections.interface';
import { Prospect } from '../prospect/prospect.entity';
import { Seller } from '../seller/seller.entity';
import { Record } from '../record/record.entity';
import { getRandomEnumValue } from '../../shared/utils/enum-manipulation';

export const MeetingFactory = setSeederFactory(
    Meeting,
    (
        faker: Faker,
        context?: { prospect: Prospect; seller: Seller; record: Record },
    ) => {
        const meeting = new Meeting();
        if (context?.prospect) meeting.prospect = context.prospect;
        if (context?.seller) meeting.seller = context.seller;
        if (context?.record) meeting.record = context.record;

        meeting.title = faker.lorem.sentence();
        meeting.duration = faker.number.int(3600); // 1h call max

        const nextStepsArray = [];
        for (let i = 0; i <= 2; i++)
            nextStepsArray.push(faker.lorem.sentence());
        const nextSteps: IMeetingSummaryNextSteps = {
            nextSteps: nextStepsArray,
        };
        meeting.summaryNextSteps = nextSteps;

        const objectionsArray = [];
        for (let i = 0; i <= 1; i++)
            objectionsArray.push(faker.lorem.sentence());
        const objections: IMeetingSummaryObjections = {
            objections: objectionsArray,
        };

        meeting.summaryObjections = objections;
        meeting.direction = getRandomEnumValue(EMeetingDirection);
        meeting.type = getRandomEnumValue(EMeetingType);
        meeting.videoProvider = getRandomEnumValue(EMeetingVideoProvider);
        meeting.audio = false;
        meeting.video = true;
        return meeting;
    },
);
