export const BASE_WORK = 1000;
export const BASE_MATERIAL = 500;

export const REPAIR_FACTORS: Record<string, number> = {
  cosmetic: 1.6,
  capital: 1.9,
  black: 1.4,
  designer: 1.5,
};

export const HOUSING_FACTORS: Record<string, number> = {
  new: 1,
  secondary: 1.2,
  cottage: 1.4,
};

export const REPAIR_LABELS: Record<string, string> = {
  cosmetic: "Косметичний",
  capital: "Капітальний",
  black: "Чорновий",
  designer: "Дизайнерський",
};

export const HOUSING_LABELS: Record<string, string> = {
  new: "Новобудова",
  secondary: "Вторинне житло",
  cottage: "Котедж або таунхаус",
};

export const INTERIOR_STYLE_FACTORS: Record<string, number> = {
  minimalism: 1,
  loft: 1.1,
  classic: 1.2,
  "hi-tech": 1.3,
};

export const INTERIOR_STYLE_LABELS: Record<string, string> = {
  minimalism: "Мінімалізм",
  loft: "Лофт",
  classic: "Класика",
  "hi-tech": "Хай-тек",
};
