// Інтерфейс для учасника команди
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string[];
  avatarUrl?: string;
}

import ingener from "../../assets/Team/ingener.jpg";
import designer from "../../assets/Team/designer.jpg";
import prorab from "../../assets/Team/prorab.png";
import rucoyVoditel from "../../assets/Team/rucoyVoditel.png";

// Перекладено на польську
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Marek Kowalski",
    position: "Kierownik budowy",
    avatarUrl: prorab,
    description: [
      "Koordynuje pracę zespołu na placu budowy.",
      "Nadzoruje zgodność z normami budowlanymi i zasadami BHP.",
      "Rozwiązuje bieżące problemy na budowie."
    ],
  },
  {
    id: 2,
    name: "Magdalena Nowak",
    position: "Kierowniczka działu inżynieryjnego",
    avatarUrl: ingener,
    description: [
      "Prowadzi nadzór techniczny i kontrolę jakości prac.",
      "Organizuje planowe i doraźne kontrole.",
      "Odpowiada za zgodność z dokumentacją techniczną."
    ],
  },
  {
    id: 3,
    name: "Anna Zielińska",
    position: "Projektantka wnętrz",
    avatarUrl: designer,
    description: [
      "Opracowuje rozwiązania aranżacyjne zgodne ze stylem klienta.",
      "Tworzy wizualizacje 3D pomieszczeń.",
      "Dobiera materiały, meble i dekoracje."
    ],
  },
  {
    id: 4,
    name: "Piotr Wiśniewski",
    position: "Dyrektor firmy",
    avatarUrl: rucoyVoditel,
    description: [
      "Zarządza wszystkimi procesami biznesowymi firmy.",
      "Kontaktuje się z klientami i podpisuje umowy.",
      "Kontroluje budżet i terminy realizacji projektów."
    ],
  },
];
