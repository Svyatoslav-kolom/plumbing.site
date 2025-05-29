export const BASE_WORK = 1000;
export const BASE_MATERIAL = 500;

export const REPAIR_FACTORS: Record<string, number> = {
    cosmetic: 1,
    capital: 1.3,
    black: 0.9,
    designer: 1.6,
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