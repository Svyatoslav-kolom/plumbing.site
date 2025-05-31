import type { RepairFormData } from "../types/formData";
import {
  BASE_MATERIAL,
  BASE_WORK,
  HOUSING_FACTORS,
  HOUSING_LABELS,
  REPAIR_FACTORS,
  REPAIR_LABELS,
} from "./constants";

const INTERIOR_STYLE_FACTORS = {
  minimalism: 1,
  loft: 1.1,
  classic: 1.2,
  "hi-tech": 1.3,
};

export function calculatePrices(data: RepairFormData) {
  const area = data.area || 1;
  const ceilingMultiplier = data.ceilingHeight > 3 ? 1.2 : 1;
  const rooms = data.rooms || 1;

  const baseRepairMultiplier = REPAIR_FACTORS[data.repairType || "cosmetic"];
  const housingMultiplier = HOUSING_FACTORS[data.housingType || "new"];

  // Якщо дизайнерський ремонт — враховуємо множник стилю інтер'єру
  const interiorStyleMultiplier =
    data.repairType === "designer"
      ? INTERIOR_STYLE_FACTORS[data.interiorStyle || "minimalism"] || 1
      : 1;

  const totalRepairMultiplier = baseRepairMultiplier * interiorStyleMultiplier;

  const demolitionCost = data.demolition ? 2000 : 0;
  const wallAlignmentCost = data.wallAlignment ? 1500 : 0;
  const extras = demolitionCost + wallAlignmentCost;

  const workBase = BASE_WORK * area;
  const workAdjusted = workBase * ceilingMultiplier * totalRepairMultiplier;
  const workPrice = workAdjusted + extras;

  const materialBase = BASE_MATERIAL * area * rooms;
  const materialPrice = materialBase * housingMultiplier;

  return {
    workPrice: Math.round(workPrice),
    materialPrice: Math.round(materialPrice),
    total: Math.round(workPrice + materialPrice),

    breakdown: [
      {
        label: "Powierzchnia (m²)", // Площа
        value: area,
        priceImpact: Math.round(BASE_WORK * area + BASE_MATERIAL * area),
      },
      {
        label: "Liczba pokoi", // Кількість кімнат
        value: rooms,
        priceImpact: Math.round(BASE_MATERIAL * area * rooms),
      },
      {
        label: "Wysokość sufitu", // Висота стелі
        value: `${data.ceilingHeight} m (${ceilingMultiplier}x)`,
        priceImpact: Math.round(workBase * (ceilingMultiplier - 1)),
      },
      {
        label: "Rodzaj remontu", // Тип ремонту
        value: REPAIR_LABELS[data.repairType || "cosmetic"],
        priceImpact: Math.round(workBase * ceilingMultiplier * (baseRepairMultiplier - 1)),
      },
      ...(data.repairType === "designer"
        ? [
            {
              label: "Styl wnętrza", // Стиль інтер'єру
              value: data.interiorStyle
                ? // Якщо стиль відомий — перекладаємо польською (з вашого словника)
                  {
                    minimalism: "Minimalizm",
                    loft: "Loft",
                    classic: "Klasyczny",
                    "hi-tech": "Hi-tech",
                  }[data.interiorStyle] || "Minimalizm"
                : "Minimalizm",
              priceImpact: Math.round(
                workBase * ceilingMultiplier * baseRepairMultiplier * (interiorStyleMultiplier - 1)
              ),
            },
          ]
        : []),
      {
        label: "Typ mieszkania", // Тип житла
        value: HOUSING_LABELS[data.housingType || "new"],
        priceImpact: Math.round(materialBase * (housingMultiplier - 1)),
      },
      {
        label: "Rozbiórka", // Демонтаж
        value: data.demolition ? "Tak" : "Nie",
        priceImpact: demolitionCost,
      },
      {
        label: "Wyrównanie ścian", // Вирівнювання стін
        value: data.wallAlignment ? "Tak" : "Nie",
        priceImpact: wallAlignmentCost,
      },
    ],
  };
}
