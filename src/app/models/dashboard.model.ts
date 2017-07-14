import { Candidate } from './candidate.model';

export class Dashboard {
    name: string;
    ItemColumns: Array<IDashboardColumnModel>;
}

export interface IDashboardColumnModel {
    did: string;
    title: string;
    status: number;
    orderNumber: number;
    style: string;
    isDraggable: boolean;
    isDropable: boolean;
    candidates: Array<Candidate>;
}