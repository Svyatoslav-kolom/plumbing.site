export type RepairType = 'cosmetic' | 'capital' | 'black' | 'designer';
export type HousingType = 'new' | 'secondary' | 'cottage';
export type InteriorStyle = 'minimalism' | 'loft' | 'classic' | 'hi-tech';

export interface RepairFormData {
  repairType: RepairType;
  housingType: HousingType;
  area: number;
  ceilingHeight: number;
  rooms?: number;
  dismantling?: boolean;
  demolition?: boolean;
  wallAlignment?: boolean;
  interiorStyle?: InteriorStyle;
}
