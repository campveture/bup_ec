export type Achievement = {
  year: string;
  label: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  source: string;
  sourceLabel: string;
};

/** Public club posts and university records. Photos are served by BUP at their original URLs. */
export const achievements: Achievement[] = [
  {
    year: "2026",
    label: "POMAC 6.0 / national final",
    title: "A new champion in policy making",
    description:
      "Team Why Shaheens won POMAC 6.0. Team AAA placed first runner-up and Team Pink Blueberry second runner-up at the 21 September final.",
    source: "https://bd.linkedin.com/company/bup-economics-club",
    sourceLabel: "BUPEC on LinkedIn",
  },
  {
    year: "2025",
    label: "POMAC 5.0 / national competition",
    title: "Policy ideas from across Bangladesh",
    description:
      "The fifth edition brought together 125 teams from more than 30 universities. Arctic Wolves from North South University won the case competition; BUP students also took the top two places in data visualization.",
    image: "/media/334b63fe28ffde8c.jpg",
    imageAlt: "POMAC 5.0 winners and university officials at the prize giving ceremony",
    source: "https://www.bup.edu.bd/news/details/667",
    sourceLabel: "BUP news and photo",
  },
  {
    year: "2024",
    label: "EconTalk / public seminar",
    title: "The digital economy on stage",
    description:
      "EconTalk 2024 examined taxation in Bangladesh's growing digital economy, with Professor Mustafizur Rahman as keynote speaker.",
    image: "/media/3d8ab4df0eed79d4.jpg",
    imageAlt: "Speakers, organizers and guests at the EconTalk 2024 seminar",
    source: "https://bup.edu.bd/news/details/365",
    sourceLabel: "BUP news and photo",
  },
  {
    year: "2023",
    label: "POMAC 4.0 / competition",
    title: "The fourth edition takes the floor",
    description:
      "The club continued its policy making competition with a live presentation stage at BUP in October 2023.",
    image: "/media/ab5a6847173edac7.jpg",
    imageAlt: "Participants present their policy case on stage at POMAC 4.0",
    source: "https://bup.edu.bd/gallery-view/8/57/2",
    sourceLabel: "BUP event gallery",
  },
  {
    year: "2022",
    label: "POMAC 3.0 / launch",
    title: "A national platform grows",
    description:
      "BUPEC launched the third edition of its inter-university policy making competition, building on editions held in 2019 and 2021.",
    image: "/media/72d95dc7c0fe4a9a.jpg",
    imageAlt: "BUPEC organizers gathered for the POMAC 3.0 launch at BUP",
    source: "https://old.thefinancialexpress.com.bd/education/curtains-go-up-on-pomac-30-at-bup-1665596329",
    sourceLabel: "The Financial Express photo",
  },
];
