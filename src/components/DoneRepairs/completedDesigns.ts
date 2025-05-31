import type { RepairFeature } from "../../types/repairsTypes";

import designMinimalistApartment from "../../assets/images/DoneDesigns/design-minimalist-apartment.webp";
import designLoftOffice from "../../assets/images/DoneDesigns/design-loft-office.jpg";
import designEclecticStudio from "../../assets/images/DoneDesigns/design-eclectic-studio.jpg";
import designClassicHouse from "../../assets/images/DoneDesigns/design-classic-house.jpg";


export const completedDesigns: RepairFeature[] = [
    {
        id: 1,
        title: "Мінімалістична квартира",
        description: "Дизайн інтер'єру для однокімнатної квартири у стилі мінімалізм.",
        repairFeatures: [
            "Світлі тони",
            "Приховане зберігання",
            "Функціональні меблі",
            "Лаконічне освітлення"
        ],
        details: {
            id: 1,
            square: 40,
            duration: "1 місяць",
            price: 12000,
            imageUrl: designMinimalistApartment,
        },
    },
    {
        id: 2,
        title: "Офіс у стилі лофт",
        description: "Інтер'єр офісу для креативної агенції з елементами індустріального стилю.",
        repairFeatures: [
            "Відкрита цегляна кладка",
            "Металеві деталі",
            "Контрастне освітлення",
            "Меблі з перероблених матеріалів"
        ],
        details: {
            id: 2,
            square: 100,
            duration: "2 місяці",
            price: 30000,
            imageUrl: designLoftOffice,
        },
    },
    {
        id: 3,
        title: "Еклектична студія",
        description: "Сміливий мікс сучасного мистецтва, класики та етнічних мотивів.",
        repairFeatures: [
            "Яскраві кольори",
            "Ретро меблі",
            "Авторські декори",
            "Дизайнерське освітлення"
        ],
        details: {
            id: 3,
            square: 55,
            duration: "1.5 місяця",
            price: 18000,
            imageUrl: designEclecticStudio,
        },
    },
    {
        id: 4,
        title: "Класичний заміський будинок",
        description: "Інтер’єр у витриманому класичному стилі з дорогими матеріалами.",
        repairFeatures: [
            "Ліпнина",
            "Дерев'яні панелі",
            "Класичні люстри",
            "Мармурова підлога"
        ],
        details: {
            id: 4,
            square: 180,
            duration: "3 місяці",
            price: 60000,
            imageUrl: designClassicHouse,
        },
    },
];
