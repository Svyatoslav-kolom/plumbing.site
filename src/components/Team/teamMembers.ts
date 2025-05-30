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

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ім’я Прізвище",
    position: "Прораб",
    avatarUrl: prorab,
    description: [
      "Координує роботу бригади на об'єкті.",
      "Контролює виконання будівельних норм та техніки безпеки.",
      "Вирішує поточні питання на будівництві."
    ],
  },
  {
    id: 2,
    name: "Ім’я Прізвище",
    position: "Руководитель інженерної служби",
    avatarUrl: ingener,
    description: [
      "Проводить технічний нагляд та контроль якості робіт.",
      "Організовує планові та позапланові перевірки.",
      "Відповідає за дотримання технічної документації."
    ],
  },
  {
    id: 3,
    name: "Ім’я Прізвище",
    position: "Дизайнер",
    avatarUrl: designer,
    description: [
      "Розробляє інтер’єрні рішення відповідно до стилю клієнта.",
      "Створює 3D-візуалізації приміщень.",
      "Підбирає матеріали, меблі та декор."
    ],
  },
  {
    id: 4,
    name: "Ім’я Прізвище",
    position: "Руководитель компанії",
    avatarUrl: rucoyVoditel,
    description: [
      "Керує всіма бізнес-процесами компанії.",
      "Спілкується з клієнтами та укладає договори.",
      "Контролює бюджет та строки виконання проєктів."
    ],
  },
];
