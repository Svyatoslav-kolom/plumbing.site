export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string[];
  avatarUrl?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ім’я Прізвище",
    position: "Прораб",
    avatarUrl: "/images/team/foreman.jpg",
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
    avatarUrl: "/images/team/foreman.jpg",
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
    avatarUrl: "/images/team/foreman.jpg",
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
    avatarUrl: "/images/team/foreman.jpg",
    description: [
      "Керує всіма бізнес-процесами компанії.",
      "Спілкується з клієнтами та укладає договори.",
      "Контролює бюджет та строки виконання проєктів."
    ],
  },
];
