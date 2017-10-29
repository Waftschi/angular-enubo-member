import { Skill } from './skill';
import { JobLocation } from './location';

export interface Job {
    applyingUsers: number[];
    description: string;
    details: string;
    durationHours: number;
    endDate: string;
    endTimeString: string;
    isApplying?: boolean;
    isWorking?: boolean;
    jobId: number;
    location?: JobLocation;
    locationId?: number;
    skill?: Skill;
    skillId: number;
    startDate: string;
    startDateId: string;
    startTimeString: string;
    userDemand: number;
    users: number[];
    projectId: number;

}