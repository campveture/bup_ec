export type Season = { title: string; year: string; description: string; image?: string; imageAlt?: string; source: string; sourceLabel: string };

export const eventSeasons: Record<string, Season[]> = {
  pomac: [
    {
      title: "POMAC 6.0", year: "2026", description: "Stability Beyond Crisis focused on fuel prices, inflation and fiscal strain. Trust Bank PLC was title partner and IFIC Bank PLC was co-sponsor.",
      source: "https://bd.linkedin.com/company/bup-economics-club", sourceLabel: "BUPEC LinkedIn",
    },
    {
      title: "POMAC 5.0", year: "2025", description: "The national competition returned with Rupali Bank PLC presenting and Trust Bank PLC powering the edition.",
      image: "/media/05d16e6c29292bc1.jpg",
      imageAlt: "POMAC 5.0 judge announcement published by BUPEC", source: "https://pe.linkedin.com/posts/bup-economics-club_pomac2025-bupec-activity-7334964329777156096-uXTe", sourceLabel: "BUPEC LinkedIn",
    },
    {
      title: "POMAC 4.0", year: "2023", description: "MGI presented the fourth edition, supported by City Bank, IDLC Finance, Femina Flaunt and Sandra Foods Intl.",
      image: "/media/ab5a6847173edac7.jpg", imageAlt: "Two POMAC 4.0 presenters on stage", source: "https://today.thefinancialexpress.com.bd/education-youth/pomac-40-comes-to-an-end-1697646793", sourceLabel: "Event report",
    },
    {
      title: "POMAC 3.0", year: "2022", description: "BRAC EPL Stock Brokerage presented this edition, with BRAC Bank powering the competition.",
      image: "/media/72d95dc7c0fe4a9a.jpg", imageAlt: "BUPEC group at the POMAC 3.0 launch", source: "https://thefinancialexpress.com.bd/education/inter-university-policymaking-competition-launched-at-bup-1665397154", sourceLabel: "Event report",
    },
    {
      title: "POMAC 2.0", year: "2021", description: "City Bank powered the second edition and SANEM joined as strategic partner.",
      source: "https://www.tbsnews.net/bangladesh/education/bup-launches-first-round-pomac-20-324661", sourceLabel: "Event report",
    },
    {
      title: "POMAC 1.0", year: "2019", description: "The inaugural edition established the inter-university competition. A participant's LinkedIn record names IFIC Bank as sponsor.",
      source: "https://bd.linkedin.com/in/chowdhury-wafee-daraiat-8b5031149", sourceLabel: "Participant LinkedIn",
    },
  ],
  econtalk: [
    {
      title: "EconTalk 2024", year: "2024", description: "A seminar on Bangladesh's emerging digital economy and taxation, featuring policy researchers and faculty speakers.",
      image: "/media/f94bcca2ddcbe9f0.jpg", imageAlt: "BUPEC's EconTalk 2024 keynote announcement", source: "https://www.linkedin.com/posts/bup-economics-club_bupec-econtalk2024-activity-7193051851154407424-KIca", sourceLabel: "BUPEC LinkedIn",
    },
    {
      title: "EconTalk 2024 — the room", year: "2024", description: "Members, speakers and guests together at the seminar.",
      image: "/media/3d8ab4df0eed79d4.jpg", imageAlt: "EconTalk 2024 group photograph", source: "https://bup.edu.bd/news/details/365", sourceLabel: "BUP photo record",
    },
    {
      title: "EconTalk 2020", year: "2020", description: "A two-day webinar on labour market dynamics in the post-pandemic world, held on 28–29 July.",
      source: "https://bup.edu.bd/public/upload/newsletter/169406017426.pdf", sourceLabel: "BUP newsletter",
    },
    {
      title: "EconTalk 2018", year: "2018", description: "A moderated discussion examined fiscal policy and government expenditure in an election year.",
      source: "https://bd.linkedin.com/in/md-ruman-hossain-766863118", sourceLabel: "Panelist LinkedIn",
    },
  ],
  econmaster: [
    {
      title: "EconMaster 1.0", year: "2019", description: "The club's first EconMaster edition appears in alumni LinkedIn records. A verified event photograph has not yet been located.",
      source: "https://bd.linkedin.com/in/kamrulhasanshuvo", sourceLabel: "Alumni LinkedIn",
    },
  ],
};
