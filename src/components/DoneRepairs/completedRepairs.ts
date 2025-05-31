import repairModernApartment from "../../assets/images/DoneRepairs/repair-modern-apartment.jpg";
import repairScandiApartment from "../../assets/images/DoneRepairs/repair-scandi-house.webp";
import repairOfficeApartment from "../../assets/images/DoneRepairs/repair-office-space.webp";
import repairStudioApartment from "../../assets/images/DoneRepairs/repair-studio.jpg";
import type { RepairFeature } from "../../types/repairsTypes";

// Масив виконаних ремонтів з перекладеними описами і характеристиками
export const completedRepairs: RepairFeature[] = [
  {
    id: 1,
    title: "Mieszkanie w stylu nowoczesnym",
    description: "Kompleksowy remont trzypokojowego mieszkania z przebudową i meblami.",
    repairFeatures: ["Sufity napinane", "Oświetlenie LED", "Ogrzewanie podłogowe", "Meble modułowe"],
    details: {
      id: 1,
      square: 85,
      duration: "3 miesiące",
      price: 580000,
      imageUrl: repairModernApartment,
    },
  },
  {
    id: 2,
    title: "Dom w stylu skandynawskim",
    description: "Remont domu jednorodzinnego z drewnianą dekoracją i panoramicznymi oknami.",
    repairFeatures: ["Prace elewacyjne", "Hydraulika", "Kominek", "Podłoga parkietowa"],
    details: {
      id: 2,
      square: 160,
      duration: "5 miesięcy",
      price: 1150000,
      imageUrl: repairScandiApartment,
    },
  },
  {
    id: 3,
    title: "Biuro dla firmy IT",
    description: "Stworzenie komfortowego open space dla ponad 20 pracowników.",
    repairFeatures: ["Szklane ścianki działowe", "Serwerownia", "Panele akustyczne", "Strefa kuchennego"],
    details: {
      id: 3,
      square: 120,
      duration: "2 miesiące",
      price: 800000,
      imageUrl: repairOfficeApartment,
    },
  },
  {
    id: 4,
    title: "Studio dla młodej pary",
    description: "Przytulne mieszkanie łączące kuchnię, salon i sypialnię.",
    repairFeatures: ["Strefowanie przestrzeni", "Bar", "Interaktywne oświetlenie", "Wbudowany sprzęt AGD"],
    details: {
      id: 4,
      square: 45,
      duration: "1,5 miesiąca",
      price: 350000,
      imageUrl: repairStudioApartment,
    },
  },
];
