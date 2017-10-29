import { Job } from './job';

export interface Project {
    id: number;
    projectId?: number;
    repeatProjectId?: number;
    startDateId?: string;
    locationId?: number;
    jobs?: Job[];
    removeAllUsers?: boolean;
}
