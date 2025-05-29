export type RepairType = 'cosmetic' | 'capital' | 'black' | 'designer';
export type HousingType = 'new' | 'secondary' | 'cottage';

export interface RepairFormData {
    repairType: RepairType;
    housingType: HousingType;
    area: number;
    ceilingHeight: number;
    rooms?: number;
    dismantling?: boolean;
    demolition?: boolean;
    wallAlignment?: boolean;
}
