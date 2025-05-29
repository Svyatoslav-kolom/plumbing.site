export interface RepairItem {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  repairTime: number;
  additionalInformation: AdditionalInformation;
}

export interface AdditionalInformation {
  details: RepairDetail[];
}

export interface RepairDetail {
  category: string;
  items: string[];
}
