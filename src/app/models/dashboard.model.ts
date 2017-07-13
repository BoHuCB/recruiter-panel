export class Dashboard {
    name: string;
    ItemColumns: Array<IDashboardColumnModel>;
}

export interface IDashboardColumnModel {
    title: string;
    status: number;
    orderNumber: number;
    style: string;
    isDraggable: boolean;
    isDropable: boolean;    
}