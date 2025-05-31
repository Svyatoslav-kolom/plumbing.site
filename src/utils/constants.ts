// Базові ціни
export const BASE_WORK = 1000;
export const BASE_MATERIAL = 500;

// Коефіцієнти типів ремонту
export const REPAIR_FACTORS: Record<string, number> = {
  cosmetic: 1.6,
  capital: 1.9,
  black: 1.4,
  designer: 1.5,
};

// Позначення типів ремонту польською
export const REPAIR_LABELS: Record<string, string> = {
  cosmetic: "Kosmetyczny",
  capital: "Generalny",
  black: "Podstawowy",
  designer: "Projektanta",
};

// Коефіцієнти типів житла
export const HOUSING_FACTORS: Record<string, number> = {
  new: 1,
  secondary: 1.2,
  cottage: 1.4,
};

// Позначення типів житла польською
export const HOUSING_LABELS: Record<string, string> = {
  new: "Nowe budownictwo",
  secondary: "Mieszkanie z rynku wtórnego",
  cottage: "Dom jednorodzinny lub szeregowy",
};

// Коефіцієнти стилів інтер'єру
export const INTERIOR_STYLE_FACTORS: Record<string, number> = {
  minimalism: 1,
  loft: 1.1,
  classic: 1.2,
  "hi-tech": 1.3,
};

// Позначення стилів інтер'єру польською
export const INTERIOR_STYLE_LABELS: Record<string, string> = {
  minimalism: "Minimalizm",
  loft: "Loft",
  classic: "Klasyczny",
  "hi-tech": "Hi-tech",
};
