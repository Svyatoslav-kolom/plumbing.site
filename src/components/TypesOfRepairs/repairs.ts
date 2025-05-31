import type { RepairItem } from "../../types/RepairItem";

import design from "../../assets/images/TypesOfRepairs/design.jpg";
import cosmetic from "../../assets/images/TypesOfRepairs/cosmetic.webp";
import capital from "../../assets/images/TypesOfRepairs/capital.jpg";
import rough from "../../assets/images/TypesOfRepairs/rough.jpg";

export const repairs: RepairItem[] = [
  {
    id: "design",
    title: "Remont designerski",
    image: design,
    description: "Remont designerski – kompleksowe rozwiązanie oparte na opracowanym projekcie wnętrza. Dokładne wykonanie zgodnie z projektem.",
    price: 13500,
    repairTime: 3,
    additionalInformation: {
      details: [
        {
          category: "Demontaż",
          items: [
            "Stara instalacja elektryczna",
            "Ściany działowe",
            "Podłogi",
            "Sufity",
            "Wylewki",
            "Rury CWU, ZWU, kanalizacja",
            "Drzwi i okna"
          ]
        },
        {
          category: "Prace zgodnie z projektem wnętrza",
          items: [
            "Plan pomieszczeń, 3 warianty układu, pakiet rysunków wykonawczych",
            "Projekt instalacji elektrycznych i sanitarnych",
            "Rzuty pomieszczeń",
            "Wizualizacje 3D",
            "Dobór materiałów budowlanych i wykończeniowych"
          ]
        },
        {
          category: "Prace przygotowawcze",
          items: [
            "Montaż rur CWU, ZWU, kanalizacji",
            "Instalacja elektryczna",
            "Tynkowanie ścian i sufitów",
            "Wylewki i posadzki samopoziomujące",
            "Przebudowa pomieszczeń"
          ]
        }
      ]
    }
  },
  {
    id: "cosmetic",
    title: "Remont kosmetyczny",
    image: cosmetic,
    description: "Idealny do odświeżenia mieszkania: wymiana rur, instalacji elektrycznej, wyrównanie ścian, malowanie lub tapetowanie, układanie płytek oraz wymiana armatury łazienkowej.",
    price: 4500,
    repairTime: 1.5,
    additionalInformation: {
      details: [
        {
          category: "Demontaż",
          items: [
            "Stara instalacja elektryczna",
            "Ściany działowe",
            "Podłogi",
            "Sufity",
            "Wylewki",
            "Rury CWU, ZWU, kanalizacja",
            "Drzwi i okna"
          ]
        },
        {
          category: "Prace wykończeniowe",
          items: [
            "Malowanie ścian i sufitów",
            "Tapetowanie lub malowanie ścian",
            "Montaż podłóg",
            "Montaż sufitów napinanych",
            "Układanie płytek",
            "Montaż punktów elektrycznych",
            "Wywóz materiałów budowlanych i sprzątanie"
          ]
        },
        {
          category: "Prace przygotowawcze",
          items: [
            "Montaż rur CWU, ZWU, kanalizacji",
            "Instalacja elektryczna",
            "Tynkowanie ścian i sufitów",
            "Wylewki i posadzki samopoziomujące"
          ]
        }
      ]
    }
  },
  {
    id: "capital",
    title: "Remont kapitalny",
    image: capital,
    description: "Idealny do całkowitego remontu mieszkania pod klucz: wymiana rur, instalacji elektrycznej, wyrównanie ścian, malowanie lub tapetowanie, układanie płytek oraz wymiana armatury łazienkowej.",
    price: 9500,
    repairTime: 2.5,
    additionalInformation: {
      details: [
        {
          category: "Demontaż",
          items: [
            "Stara instalacja elektryczna",
            "Ściany działowe",
            "Podłogi",
            "Sufity",
            "Wylewki",
            "Rury CWU, ZWU, kanalizacja",
            "Drzwi i okna"
          ]
        },
        {
          category: "Prace wykończeniowe",
          items: [
            "Malowanie ścian i sufitów",
            "Tapetowanie lub malowanie ścian",
            "Montaż podłóg",
            "Montaż sufitów napinanych",
            "Układanie płytek",
            "Montaż punktów elektrycznych",
            "Sprzątanie po remoncie"
          ]
        },
        {
          category: "Prace przygotowawcze",
          items: [
            "Montaż rur CWU, ZWU, kanalizacji",
            "Instalacja elektryczna",
            "Tynkowanie ścian i sufitów",
            "Wylewki i posadzki samopoziomujące"
          ]
        }
      ]
    }
  },
  {
    id: "rough",
    title: "Remont przygotowawczy",
    image: rough,
    description: "Zakłada wykonanie prac przygotowawczych pomieszczeń do wykończenia i prac końcowych.",
    price: 5700,
    repairTime: 2,
    additionalInformation: {
      details: [
        {
          category: "Demontaż",
          items: [
            "Stara instalacja elektryczna",
            "Ściany działowe",
            "Podłogi",
            "Sufity",
            "Wylewki",
            "Rury CWU, ZWU, kanalizacja",
            "Drzwi"
          ]
        },
        {
          category: "Prace przygotowawcze",
          items: [
            "Montaż rur CWU, ZWU, kanalizacji",
            "Instalacja elektryczna",
            "Tynkowanie ścian i sufitów",
            "Wylewki i posadzki samopoziomujące",
            "Sprzątanie pomieszczeń"
          ]
        }
      ]
    }
  }
];
