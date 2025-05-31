export type RepairDetails = {
    id: number;
    square: number;
    duration: string;
    price: number;
    imageUrl: string;
};

export type RepairFeature = {
    id: number;
    title: string;
    description: string;
    repairFeatures: string[];
    details: RepairDetails;
};