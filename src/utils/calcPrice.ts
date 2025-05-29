import type { RepairFormData } from "../types/formData";
import {
  BASE_MATERIAL,
  BASE_WORK,
  HOUSING_FACTORS,
  HOUSING_LABELS,
  REPAIR_FACTORS,
  REPAIR_LABELS,
} from "./constants";

export function calculatePrices(data: RepairFormData) {
  const area = data.area || 1;
  const ceilingMultiplier = data.ceilingHeight > 3 ? 1.2 : 1;
  const rooms = data.rooms || 1;

  const repairMultiplier = REPAIR_FACTORS[data.repairType || "cosmetic"];
  const housingMultiplier = HOUSING_FACTORS[data.housingType || "new"];

  const demolitionCost = data.demolition ? 2000 : 0;
  const wallAlignmentCost = data.wallAlignment ? 1500 : 0;
  const extras = demolitionCost + wallAlignmentCost;

  const workBase = BASE_WORK * area;
  const workAdjusted = workBase * ceilingMultiplier * repairMultiplier;
  const workPrice = workAdjusted + extras;

  const materialBase = BASE_MATERIAL * area * rooms;
  const materialPrice = materialBase * housingMultiplier;

  return {
    workPrice: Math.round(workPrice),
    materialPrice: Math.round(materialPrice),
    total: Math.round(workPrice + materialPrice),

    breakdown: [
      {
        label: "Площа (м²)",
        value: area,
        priceImpact: Math.round(BASE_WORK * area + BASE_MATERIAL * area),
      },
      {
        label: "Кількість кімнат",
        value: rooms,
        priceImpact: Math.round(BASE_MATERIAL * area * rooms),
      },
      {
        label: "Висота стелі",
        value: `${data.ceilingHeight} м (${ceilingMultiplier}x)`,
        priceImpact: Math.round(workBase * (ceilingMultiplier - 1)),
      },
      {
        label: "Тип ремонту",
        value: REPAIR_LABELS[data.repairType || "cosmetic"],
        priceImpact: Math.round(workBase * ceilingMultiplier * (repairMultiplier - 1)),
      },
      {
        label: "Тип житла",
        value: HOUSING_LABELS[data.housingType || "new"],
        priceImpact: Math.round(materialBase * (housingMultiplier - 1)),
      },
      {
        label: "Демонтаж",
        value: data.demolition ? "Так" : "Ні",
        priceImpact: demolitionCost,
      },
      {
        label: "Вирівнювання стін",
        value: data.wallAlignment ? "Так" : "Ні",
        priceImpact: wallAlignmentCost,
      },
    ],
  };
}
