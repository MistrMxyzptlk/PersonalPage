import {IImportantMilestone, IMilestone} from '../../pages/about/milestones/milestones.component';


const lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh felis, pretium vitae tincidunt ornare, accumsan et enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut tincidunt rhoncus erat sed auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi turpis velit, volutpat id orci et, suscipit dapibus metus. Vivamus imperdiet hendrerit velit id imperdiet. Sed dapibus felis et dolor fringilla, sit amet scelerisque turpis scelerisque. Suspendisse potenti.\n';

const elementarySchool: IMilestone[] = [
  {
    icon: 'keyboard',
    headline: 'Nástup do třídy s rozšířenou výukou Informatiky',
    date: new Date('09-01-2012'),
    text: `Při nástupu na 2. stupeň, jsme byly podle schopností rozčleněni do 3 různých typů tříd,
        Matematicko-přirodovědná, Informativní a běžná. V mém případě jsem byl vybrán právě do informativní.
      `,
  },
  {
    icon: 'verified',
    headline: 'Pythágoriáda',
    date: {
      from: new Date('11-1-2011'),
      to: new Date('01-19-2012'),
    },
    text: 'Postoupil jsem do okresního kola Pythágoriády, kde jsem se úmístil na sdíleném 3. a 4. místě.',
  },
  {
    icon: 'verified',
    headline: 'Pythágoriáda',
    date: new Date('05-13-2015'),
    text: 'Stal jsem se úspěšným řešitelem ročníku 2015.',
  },
];
const highSchool: IMilestone[] = [
  {
    icon: 'local_fire_department',
    headline: 'Počátek mého šílenství',
    date: {
      from: new Date('09-1-2016')
    },
    text: `Začal jsem ve škole programovat v Javě a paralelně jsme se začal učit HTML, CSS a PHP.
      Vedle toho taky nějaké základy hardwaru a počítačovích sítí. Součástí prográmka bylo i do jisté míry
      konceptuální programování.`,
  },
  {
    headline: 'Z Javy na C#',
    date: {
      from: new Date('11-1-2016')
    },
    text: `Vzhledem k preferencím celé třídy jsme přešly z Javy na C#. resp. .NET. Který tedy měl mnohem
      přivětivější syntaxy.`,
  },
  {
    icon: 'dns',
    headline: 'Databáze',
    date: {
      from: new Date('09-01-2017'),
      to: new Date('06-30-2019'),
    },
    text: `V 2. ročníku jsem se začal učit navrhování databází na abstraktní úrovni. Šlo o dialekt Postgre SQl,
       ale ovládal jsem i tehdy ještě MySQL před tím než ho koupil Oracle a vznikla Maria DB. Ve 3. ročníku
       jsme po tom navázaly Procedurálními databázemi, kde jsem pro změnu používal tehdy už Maria DB, které
       bylo a stále je velice podobné MySQL.`,
  },
  {
    icon: 'draw',
    headline: 'Algoritmizace',
    date: {
      from: new Date('09-01-2017'),
      to: new Date('06-31-2019'),
    },
    text: `Rovněž ve 2. ročníku se začala vyučovat Algoritmizace, kde jsme vytvářely algoritmy a zapisovaly
      je do vývojových diagramů. Pak předmět pokračoval ve 3. ročníku kde už jsme se učily hlavně nejrůznější
      způsoby řazení polý, od bubble sortu až po quick sort.`,
  },
  {
    icon: 'javascript',
    headline: 'JavaScript, Typescript a Angular',
    date: {
      from: new Date('09-01-2017'),
    },
    text: `Začal jsem programovat v Javascriptu. Z počátku jen čístý JS, později jsem začal
      používat jQuery a další knihovny. Ve 3. ročníku jsem začal ve stacku s ASP.NET MVC CORE
      používat i Angular a Typescript, který používám aktivně do dnes.`,
  },
  {
    icon: 'bolt',
    headline: 'ASP.NET a půl ročníková práce',
    date: {
      from: new Date('02-01-2018'),
      to: new Date('06-30-2018'),
    },
    text: `V druhé půlce 2. ročníků jsme v rámci 3 předmětů dohromady měly za úkol vypracovat půl
      ročníkovou práci. Což byl můj první větší projekt a jak to tak s nima bývá, Ukousl jsem si moc
      velké sousto a projekt jsem nedokončil. Na druhou stranu jsem tak získal zkušenosti a naučil se
      pracovat v ASP.NET MVC.`,
  },
  {
    icon: 'article',
    headline: '1. a 2. Ročníková práce',
    date: new Date(),
    text: `Ve 3. a 4. Ročníku jsem pracoval na svých prvních velkých projektech, což zahrnovalo vše od návrhu,
      přes implementaci až po dokumentaci a následnou prezentaci před porotou`,
  },
];
const collage: IMilestone[] = [
  {
    headline: 'lorem ipsum',
    text: lorem_ipsum,
  },
];
const work_1: IMilestone[] = [
  {
    headline: 'lorem ipsum',
    text: lorem_ipsum,
  },
];

export const MILESTONES: IImportantMilestone[] = [
  {
    icon: 'baby_changing_station',
    headline: 'Narozen 9. Dubna 2000 v Teplicích',
    date: new Date('04-09-2000'),
    text: null,
    subMilestones: [],
  },
  {
    icon: 'draw',
    headline: 'Základní škola',
    date: {
      from: new Date('09-01-2007'),
      to: new Date('08-31-2016'),
    },
    text: 'Nastoupil jsem na základní školu ZŽ RVMPP Buzulucká v 7 letech.',
    subMilestones: elementarySchool,
  },
  {
    icon: 'door_open',
    headline: 'Střední škola',
    date: {
      from: new Date('09-01-2016'),
      to: new Date('08-31-2020'),
    },
    text: `Nastoupil jsem na Střední průmyslovou školu v Ústí nad Labem,
        na obor Informační technologie se zaměřením na počítačové sítě a programování.
      `,
    subMilestones: highSchool,
  },
  {
    icon: 'school',
    headline: 'Vysoká škola',
    date: {
      from: new Date('09-01-2020'),
    },
    text: lorem_ipsum,
    subMilestones: collage,
  },
  {
    icon: 'apartment',
    headline: 'První práce',
    date: new Date('02-01-2022'),
    text: lorem_ipsum,
    subMilestones: work_1,
  },
  {
    icon: 'flag',
    headline: 'Magisterské studium na FIT ČVUT',
    date: new Date('09-01-2024'),
    text: null,
    subMilestones: [],
  },
];
