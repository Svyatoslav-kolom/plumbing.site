import icon1 from '../../assets/icons/RepairSteps/1.svg';
import icon2 from '../../assets/icons/RepairSteps/2.svg';
import icon3 from '../../assets/icons/RepairSteps/3.svg';
import icon4 from '../../assets/icons/RepairSteps/4.svg';
import icon5 from '../../assets/icons/RepairSteps/5.svg';
import icon6 from '../../assets/icons/RepairSteps/6.svg';

export interface RepairStep {
  title: string;
  description: string;
  icon: string;
}

// Масив кроків ремонту з перекладом на польську мову
export const repairSteps: RepairStep[] = [
  {
    title: 'Pomiary i wycena',
    icon: icon1,
    description:
      'Dokonujemy pomiarów obiektu, uwzględniamy Twoje wymagania, tworzymy dokładną wycenę oraz projekt wnętrza pod klucz.',
  },
  {
    title: 'Podpisanie umowy',
    icon: icon2,
    description:
      'Ustalamy terminy i cenę w umowie. Określamy datę rozpoczęcia prac. Możliwość ratalnej płatności za materiały i remont.',
  },
  {
    title: 'Rozwiązywanie wszelkich kwestii',
    icon: icon3,
    description:
      'Sporządzamy listę potrzebnych materiałów i dobieramy dostawców. Na życzenie możemy wszystko za Ciebie zakupić.',
  },
  {
    title: 'Prace remontowe',
    icon: icon4,
    description:
      'Dokumentujemy każdy etap prac. Raportujemy co tydzień. Płacisz dopiero po zakończeniu danego etapu.',
  },
  {
    title: 'Kontrola jakości',
    icon: icon5,
    description:
      'Każdy etap remontu głównego jest sprawdzany przez 4 wykwalifikowanych specjalistów z naszego zespołu.',
  },
  {
    title: 'Sprzątanie i przekazanie projektu',
    icon: icon6,
    description:
      'Przeprowadzamy końcowe sprzątanie i wywóz śmieci. Oddajemy Ci czysty, gotowy do zamieszkania obiekt.',
  },
];
