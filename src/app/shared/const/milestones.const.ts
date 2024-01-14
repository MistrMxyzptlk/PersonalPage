import {IImportantMilestone, IMilestone} from '../../pages/about/milestones/milestones.component';

const elementarySchool: IMilestone[] = [
  {
    icon: 'verified',
    headline: 'Pythágoriáda',
    date: {
      from: new Date('11-1-2011'),
      to: new Date('01-19-2012'),
    },
    text: 'Umístil jsem se na sdíleném 3. a 4. místě v pythágoriádě.',
  },
  {
    icon: 'keyboard',
    headline: 'Rozšířená výuka Informatiky',
    date: new Date('09-01-2012'),
    text: 'Při nástupu na 2. stupeň, základní školy jsem se dostal do třídy s rozšířenou výukou informatiky.',
  },
];
const highSchool: IMilestone[] = [
  {
    icon: 'local_fire_department',
    headline: 'Počátek mého šílenství',
    date: {
      from: new Date('09-1-2016')
    },
    text: `V životě každého programátora přijde doba, kdy tě programování v noci nenechává spát, a ráno táhne z postele.
      Začal jsem ve škole programovat v Javě a paralelně jsme se začal učit HTML, CSS a PHP. Vedle toho taky nějaké základy
      hardwaru a počítačovích sítí. Součástí prográmka bylo i konceptuální modelování a hodně OOP.`,
  },
  {
    svgIcon: 'c-sharp',
    headline: 'C# a ASP.NET',
    text: `Vzhledem k preferencím celé třídy jsme přešly z Javy na C#. resp. .NET. Který tedy měl mnohem
      přivětivější syntaxy. Nehledě na to, že jediné rozumné IDE pro Javu ke kterému jsme měly přístup
      bylo Netbeans a Eclipse. Následně jsme v průběhu studia začal pracovat s ASP.NET a posléze ASP.NET Core.`,
  },
  {
    svgIcon: 'javascript',
    headline: 'JavaScript',
    text: `Javascript je dalším z jazyků co se učily na mé střední škole, vyučoval se pouze čístý JS s tím že jsme
    mohly používat knihovny, ale už bylo na nás se je naučit. V předmětu se hlavně učilo jak používat JS pro formuláře,
    vykreslování, chyby, import knihoven. (tedy základy)`,
  },
  {
    svgIcon: 'angular',
    headline: 'Typescript, React a Angular',
    text: `Ke konci roku jsem si začal vybírat framework, tehdy jsem začal zkoumávat React, protože ten název zněl cool,
    ale nakonec jsem se rozhodl pro Angular, protože ačkoli je těžší na naučení, tak poskytuje daleko větší
    stabilitu, díky tomu že vše co prakticky člověk potřebuje je psané inhouse, oproti tomu React se velice spolehá na
    svou komunitu.`
  },
  {
    icon: 'dns',
    headline: 'Databáze',
    date: {
      from: new Date('09-01-2017'),
      to: new Date('06-30-2019'),
    },
    text: `Naučil jsem se vše od Návrhu a tvorby databáze, přes pokročilé SQL příkazy až po procedurální SQL.
    Součástí výuky bylo hlavně trénování návrhu databází, dle reálných zadaní a následného selectování a řešení různých
    problémů, které mohou nastat`,
  },
  {
    icon: 'draw',
    headline: 'Algoritmizace',
    date: {
      from: new Date('09-01-2017'),
      to: new Date('06-31-2019'),
    },
    text: `Hlavní náplní algoritmizace byla tvorba návrhových diagramů pro algorimy, nejčastěji různé způsoby vykreslování,
    nejrůznějších obrazců. Hlavním cílem předmětu bylo abychom si natrénovaly nastavování podmínek i v docela komplikovaných situacích
    a vlastně celkově abychom měly opravdu silné základy které každý podceňuje. Druhý rok předmětu byl o řazení prvků v poly a učení se
    nejrůznějších řadících algorimů od bubble sortu, přes quicksort až po bucket a comb sort.`,
  },
  {
    icon: 'bolt',
    headline: 'Půl ročníková práce',
    text: `Na konci 2. ročníku jsem měl za úkol vypracovat půl ročníkovou práci. Jedinou podmínkou zadní bylo, aby
    aplikace obsahovala CRUD. Já se ale rozhodl používat frameworky a použil jsem kombinaci ASP.NET MVC a Angular 5.`,
  },
  {
    icon: 'article',
    headline: 'Ročníkové práce',
    date: new Date('09-01-2019'),
    text: `V průběhu studia jsme vypracoval 2 ročníkové práce, které byly zakončeny prezentací před porotou složenou z učitelů.
    Cílem této práce bylo, abychom si vyzkoušely vymyslet, navrhnout a uzkutečnít nějaký projekt mohlo se jednat o cokoli, ale většinou
    šlo o web. Pro mne to byla zkušenost a našel jsem své limity jak moc dokážu udělat sám.`
  },
];
const collage: IMilestone[] = [
  {
    svgIcon: 'cpp',
    headline: 'C/C++',
    text: `Cílem předmětů bylo z nás udělat špičkové programátory, kde se neodpouštěla ani nejmenší
    chybička v programu a testování bylo děláno strojem a bylo opravdu nelítostné. Naučil jsem se pracovat v
    imperativních jazycích a hromady konceptů, které zavádí C++.`,
  },
  {
    icon: 'functions',
    headline: 'Matematika',
    text: `Prošel jsem si kurzi Matematické Analýzy, Lineární algebry, Diskrétní matematiky,
    Statistiky a Pravděpodobnosti, Kryptografie a Matematické logiky. Které mi dali velké
    množství nástrojů na řešení nejrůznějších problému se kterém se v oboru mohu setkat.`,
  },
  {
    icon: 'draw',
    headline: 'Algoritmy a Grafy',
    text: `Předmět byl částečně matematika a částečně programování, náplní byla tvorba algoritmů a následný důkaz jejich
    vlastností jako asymtotická složitost, korektnost a konečnost. Součástí předmětu bylo i mnoho různých algoritmů od
    jednodušších jako BFS a DFS, přes Djikstrův algoritmus a relaxační algoritmy, po dynamické programování.`
  },
  {
    icon: 'precision_manufacturing',
    headline: 'Automaty a Gramatiky',
    text: `Náplní předmětu byly jazykové modely (například regex), turingovy stroje, dokazovaní vlastností jazykových
    modelů a algoritmy s tím spojené. `
  },
  {
    icon: 'manufacturing',
    headline: 'Operační systémy',
    text: `Součástí tohoto předmětu bylo low level vícevláknové programování, synchronizace několika vláken pomocí
    různých nástrojů, problém producera a konzumenta, Virtualizace paměti, filesystémy a RAID.`
  }
];
const work_1: IMilestone[] = [
  {
    icon: 'payments',
    headline: 'Monilogi',
    date: {
      from: new Date('01-01-2023'),
      to: new Date('07-30-2023')
    },
    text: `Mojím prvním projektem v Greysonu, byla aplikace pro tehdy novou slovenskou Firmu Monilogi, která se zaměřuje
    na správu a úschovu hotovosti a cenností. Náplní práce byla tvorba frontendu aplikace pro správu hotovosti a cenností.
    Mojí hlavní prací na tomto projektu byly integrace Azure AAD na FE a další věci s tím spojené a pokud jsem se nevěnoval
    integrací, tak jsem pomáhal s tvorbou nových Views.`,
  },
  {
    icon: 'bolt',
    headline: 'E.ON kalkulačka',
    date: {
      from: new Date('07-01-2023'),
      to: new Date('10-30-2023')
    },
    text: `Před dokončením první části projektu pro Monilogi, jsem byl postupně přesunut pod E.ON, abych pomohl s
    dokončením online kalkulačky fotovoltaiky, Tentokrát jsem ale pomáhal s backendem aplikace.`
  },
  {
    icon: 'Trolley',
    headline: 'EOP migrace',
    date: {
      from: new Date('11-01-2023')
    },
    text: `Po dokončení kalkulačky pro E.ON. jsem byl opět přesunut pod Kooperativu, kde jsem se zapojil do migrace
    databáze z Lotusu do MSSQL. Mojí náplní práce byla hlavně práce s daty v databázi a jejich předspracování, propojení s
    data z jiných systémů a pomoc s následným mapování na datový model nové aplikace.`
  }
];

export const MILESTONES: IImportantMilestone[] = [
  {
    icon: 'draw',
    headline: 'Základní škola',
    date: {
      from: new Date('09-01-2007'),
      to: new Date('08-31-2016'),
    },
    text: `Nastoupil jsem na základní školu ZŽ RVMPP Buzulucká v 7 letech.
    `,
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
        Odmaturoval jsme ve 20 letech.
      `,
    subMilestones: highSchool,
  },
  {
    icon: 'school',
    headline: 'Vysoká škola',
    date: {
      from: new Date('09-01-2020'),
    },
    text: `Po dokončení střední školy v ústí nad labem jsem se rozhodl podle mota "Go big or go home" jít na ČVUT FIT.
    A dokázat si, že na to mám.`,
    subMilestones: collage,
  },
  {
    icon: 'apartment',
    headline: 'První práce',
    date: new Date('02-01-2022'),
    text: `V průběhu studia jsem nastoupil do práce pro Greyson Consulting s.r.o., protože už mně nebavilo dělat
    projekty do šuplíku. Greyson se soustředí na management a systémové integrace pro bankovní sektor na slovensku a
    v Čechách. `,
    subMilestones: work_1,
  },
  {
    icon: 'flag',
    headline: 'Magisterské studium na FIT ČVUT?',
    //date: new Date('09-01-2024'),
    text: null,
    subMilestones: [],
  },
];
