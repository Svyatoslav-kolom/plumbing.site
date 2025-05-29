import icon1 from '../../assets/icons/RepairSteps/1.svg'
import icon2 from '../../assets/icons/RepairSteps/2.svg'
import icon3 from '../../assets/icons/RepairSteps/3.svg'
import icon4 from '../../assets/icons/RepairSteps/4.svg'
import icon5 from '../../assets/icons/RepairSteps/5.svg'
import icon6 from '../../assets/icons/RepairSteps/6.svg'

export interface RepairStep {
  title: string;
  description: string;
  icon: string;
}

export const repairSteps: RepairStep[] = [
  {
    title: 'Замеры и расчет сметы',
    icon: icon1,
    description:
      'Замеряем объект, учитываем ваши задачи, создаем точную смету и дизайн-проект для ремонта под ключ.',
  },
  {
    title: 'Подписание договора',
    icon: icon2,
    description:
      'Закрепляем сроки и цену в договоре. Уточняем дату начала работ. Возможна рассрочка на материалы и ремонт.',
  },
  {
    title: 'Решаем любые вопросы',
    icon: icon3,
    description:
      'Составляем список нужных материалов, подбираем поставщиков. При желании всё закупим за вас.',
  },
  {
    title: 'Ремонтные работы',
    icon: icon4,
    description:
      'Фиксируем каждый этап работ. Отчитываемся еженедельно. Вы платите только после выполнения каждого этапа.',
  },
  {
    title: 'Контроль качества',
    icon: icon5,
    description:
      'Каждый этап капитального ремонта проверяют 4 квалифицированных специалиста из нашей команды.',
  },
  {
    title: 'Уборка и сдача проекта',
    icon: icon6,
    description:
      'Проводим финальную уборку, вывозим мусор. Сдаём вам чистый, готовый к жизни объект.',
  },
];
