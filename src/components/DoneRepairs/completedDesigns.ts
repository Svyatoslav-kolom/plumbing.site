import type { RepairFeature } from "../../types/repairsTypes";

import designMinimalistApartment from "../../assets/images/DoneDesigns/design-minimalist-apartment.webp";
import designLoftOffice from "../../assets/images/DoneDesigns/design-loft-office.jpg";
import designEclecticStudio from "../../assets/images/DoneDesigns/design-eclectic-studio.jpg";
import designClassicHouse from "../../assets/images/DoneDesigns/design-classic-house.jpg";

// Масив завершених дизайн-проектів з польським перекладом
export const completedDesigns: RepairFeature[] = [
  {
    id: 1,
    title: "Minimalistyczne mieszkanie",
    description: "Projekt wnętrza jednopokojowego mieszkania w stylu minimalistycznym.",
    repairFeatures: [
      "Jasne tony",
      "Ukryte przechowywanie",
      "Funkcjonalne meble",
      "Proste oświetlenie"
    ],
    details: {
      id: 1,
      square: 40,
      duration: "1 miesiąc",
      price: 12000,
      imageUrl: designMinimalistApartment,
    },
  },
  {
    id: 2,
    title: "Biuro w stylu loft",
    description: "Wnętrze biura dla kreatywnej agencji z elementami stylu industrialnego.",
    repairFeatures: [
      "Odsłonięta ceglana ściana",
      "Metalowe detale",
      "Kontrastowe oświetlenie",
      "Meble z materiałów recyklingowych"
    ],
    details: {
      id: 2,
      square: 100,
      duration: "2 miesiące",
      price: 30000,
      imageUrl: designLoftOffice,
    },
  },
  {
    id: 3,
    title: "Eklektyczne studio",
    description: "Śmiałe połączenie sztuki współczesnej, klasyki i motywów etnicznych.",
    repairFeatures: [
      "Jaskrawe kolory",
      "Meble retro",
      "Dekoracje autorskie",
      "Designerskie oświetlenie"
    ],
    details: {
      id: 3,
      square: 55,
      duration: "1,5 miesiąca",
      price: 18000,
      imageUrl: designEclecticStudio,
    },
  },
  {
    id: 4,
    title: "Klasyczny dom podmiejski",
    description: "Wnętrze w wyważonym klasycznym stylu z drogimi materiałami.",
    repairFeatures: [
      "Stiuki",
      "Drewniane panele",
      "Klasyczne żyrandole",
      "Podłoga marmurowa"
    ],
    details: {
      id: 4,
      square: 180,
      duration: "3 miesiące",
      price: 60000,
      imageUrl: designClassicHouse,
    },
  },
];
