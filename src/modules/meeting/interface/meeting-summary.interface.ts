import { IMeetingSummaryNextSteps } from './meeting-summary-next-steps.interface';
import { IMeetingSummaryObjections } from './meeting-summary-objections.interface';

export type IMeetingSummary = {
    nextSteps: IMeetingSummaryNextSteps;
    objections: IMeetingSummaryObjections;
};
