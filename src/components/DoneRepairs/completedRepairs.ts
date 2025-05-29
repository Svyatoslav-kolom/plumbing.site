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

export const completedRepairs: RepairFeature[] = [
    {
        id: 1,
        title: "Квартира в сучасному стилі",
        description: "Повний ремонт трикімнатної квартири з переплануванням та меблями.",
        repairFeatures: ["Натяжні стелі", "Світлодіодне освітлення", "Тепла підлога", "Модульні меблі"],
        details: {
            id: 1,
            square: 85,
            duration: "3 місяці",
            price: 580000,
            imageUrl: "/images/repair-modern-apartment.jpg",
        },
    },
    {
        id: 2,
        title: "Будинок у скандинавському стилі",
        description: "Ремонт приватного будинку з оздобленням деревом і панорамними вікнами.",
        repairFeatures: ["Фасадні роботи", "Сантехніка", "Камін", "Паркетна підлога"],
        details: {
            id: 2,
            square: 160,
            duration: "5 місяців",
            price: 1150000,
            imageUrl: "/images/repair-scandi-house.jpg",
        },
    },
    {
        id: 3,
        title: "Офіс для IT-компанії",
        description: "Створення комфортного open space офісу для 20+ працівників.",
        repairFeatures: ["Скляні перегородки", "Серверна кімната", "Акустичні панелі", "Кухонна зона"],
        details: {
            id: 3,
            square: 120,
            duration: "2 місяці",
            price: 800000,
            imageUrl: "/images/repair-office-space.jpg",
        },
    },
    {
        id: 4,
        title: "Студія для молодої пари",
        description: "Затишне житло з поєднанням кухні, вітальні та спальні.",
        repairFeatures: ["Зонування простору", "Барна стійка", "Інтерактивне освітлення", "Вбудована техніка"],
        details: {
            id: 4,
            square: 45,
            duration: "1.5 місяці",
            price: 350000,
            imageUrl: "/images/repair-studio.jpg",
        },
    },
];
