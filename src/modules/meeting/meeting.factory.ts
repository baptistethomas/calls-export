import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Meeting } from './meeting.entity';
import { EMeetingDirection } from './enumerator/meeting-direction.enum';
import { EMeetingType } from './enumerator/meeting-type.enum';
import { EMeetingVideoProvider } from './enumerator/meeting-video-provider.enum';

export const MeetingFactory = setSeederFactory(Meeting, (faker: Faker) => {
    const meeting = new Meeting();
    meeting.title = faker.lorem.sentence();
    meeting.duration = faker.number.int(3600); // 1h call max
    meeting.direction =
        Object.values(EMeetingDirection)[
            Math.round(Math.random() * Object.values(EMeetingDirection).length)
        ];
    meeting.type =
        Object.values(EMeetingType)[
            Math.round(Math.random() * Object.values(EMeetingType).length)
        ];
    /*
    meeting.record.transcript = faker.lorem.paragraph(2);
    meeting.record.format =
        Object.values(ERecordFormat)[
            Math.random() * Object.values(ERecordFormat).length
        ];
    meeting.record.file = faker.system.commonFileName();
    */
    meeting.audio = false;
    meeting.video = true;
    meeting.videoProvider = Object.values(EMeetingVideoProvider)[
        Math.round(Math.random() * Object.values(EMeetingVideoProvider).length)
    ];
    return meeting;
});
