export const site = {
  name: "BUP Economics Club",
  shortName: "BUPEC",
  motto: "Initiating Development Through Knowledge",
  founded: 2017,
  university: "Bangladesh University of Professionals",
  department: "Department of Economics",
  faculty: "Faculty of Arts and Social Sciences",
  description:
    "BUP Economics Club (BUPEC) is the student platform for economic debate, policy research and national competition at Bangladesh University of Professionals.",
  address: {
    line1: "Bangladesh University of Professionals",
    line2: "Mirpur Cantonment, Dhaka-1216, Bangladesh",
  },
  email: "bupeconomicsclub@gmail.com",
  phone: "+880 9666-790799",
  phoneHref: "+8809666790799",
  socials: {
    facebook: "https://www.facebook.com/bupeconomicsclub/",
    linkedin: "https://www.linkedin.com/company/bup-economics-club",
    instagram: "https://www.instagram.com/bup_ec/?hl=en" as string | null,
    youtube: null as string | null,
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Members", href: "/members" },
    { label: "Alumni", href: "/alumni" },
    { label: "Insights", href: "/insights" },
    { label: "Affiliations", href: "/affiliations" },
  ],
};

export const stats = [
  { value: 2017, suffix: "", label: "Founded at BUP", note: "Student-led since day one" },
  { value: 3, suffix: "", label: "Flagship programmes", note: "POMAC, EconTalk, EconMaster" },
  { value: 125, suffix: "", label: "Teams at POMAC 5.0", note: "From 30+ universities" },
  { value: 6, suffix: "", label: "Editions of POMAC", note: "Growing every year" },
];

export const pillars = [
  {
    number: "01",
    title: "Debate & Dialogue",
    description:
      "EconTalk brings the questions shaping Bangladesh's economy into one room — national budget analysis, expert panels and open student debate.",
    points: ["Budget analysis", "Expert panels", "Student debate"],
  },
  {
    number: "02",
    title: "Policy Competition",
    description:
      "POMAC invites teams from universities across the country to solve investment cases, argue policy and defend their proposals before a national jury.",
    points: ["Case solving", "Policy dialogue", "Final defence"],
  },
  {
    number: "03",
    title: "Learning & Training",
    description:
      "EconMaster turns theory into practice through workshops, masterclasses and peer-led sessions on data, writing and economic reasoning.",
    points: ["Workshops", "Masterclasses", "Peer learning"],
  },
  {
    number: "04",
    title: "Research & Publication",
    description:
      "Student briefs, event reports and commentary give members a first byline — and give the BUP community a readable take on the economy.",
    points: ["Policy briefs", "Event reports", "Commentary"],
  },
];

export const values = [
  {
    title: "Rigour",
    description: "We argue from evidence, name our assumptions and show our working.",
  },
  {
    title: "Curiosity",
    description: "We ask the second question — the one that makes an answer interesting.",
  },
  {
    title: "Access",
    description: "Economics belongs to every student, not only to those already fluent in it.",
  },
  {
    title: "Integrity",
    description: "We credit sources, respect disagreement and keep our commitments.",
  },
];

export const timeline = [
  {
    year: "2017",
    title: "The club is founded",
    description:
      "BUPEC begins as a home for economics students at BUP — a forum for debate, discussion and the free exchange of ideas.",
  },
  {
    year: "2017–23",
    title: "The flagship format takes shape",
    description:
      "EconTalk, EconMaster and POMAC grow into the club's three defining programmes, each built around a different way of doing economics in public.",
  },
  {
    year: "2024",
    title: "EconTalk 2024",
    description:
      "The annual seminar examines the emerging digital economy in Bangladesh and the unexplored avenues of taxing it.",
  },
  {
    year: "2025",
    title: "POMAC 5.0",
    description:
      "125 teams from over 30 universities took part, according to BUP. Presented by Rupali Bank PLC and powered by Trust Bank PLC.",
  },
  {
    year: "2026",
    title: "POMAC 6.0",
    description:
      "The sixth edition concluded in September with Team Why Shaheens as champions, according to BUPEC's LinkedIn announcement.",
  },
];

export const partners: { name: string; role: string; context: string; logo?: string; description: string; source?: string }[] = [
  {
    name: "Rupali Bank PLC",
    role: "Title sponsor",
    context: "POMAC 5.0 · 2025",
    description: "Title sponsor of POMAC 5.0, supporting a national platform for student policy work.",
    source: "https://pe.linkedin.com/posts/bup-economics-club_pomac2025-bupec-activity-7334964329777156096-uXTe",
  },
  {
    name: "Trust Bank PLC",
    role: "Powered by",
    context: "POMAC 5.0 · 2025 / POMAC 6.0 · 2026",
    logo: "/media/4fbb356b66435eb3.png",
    description: "Powered POMAC 5.0 and later joined the sixth edition as title partner.",
    source: "https://bd.linkedin.com/company/bup-economics-club",
  },
  {
    name: "IFIC Bank PLC",
    role: "Co-sponsor",
    context: "POMAC 1.0 · 2019 / POMAC 6.0 · 2026",
    logo: "/media/ab10ab81c76ebb33.png",
    description: "Sponsored the first POMAC edition and returned as a co-sponsor for POMAC 6.0.",
    source: "https://bd.linkedin.com/company/bup-economics-club",
  },
  {
    name: "Meghna Group of Industries",
    role: "Title sponsor",
    context: "POMAC 4.0 · 2023",
    logo: "/media/3e4d6f183ce8a706.png",
    description: "Presented the fourth POMAC edition.",
    source: "https://today.thefinancialexpress.com.bd/education-youth/pomac-40-comes-to-an-end-1697646793",
  },
  {
    name: "City Bank",
    role: "Sponsor",
    context: "POMAC 2.0 · 2021 / POMAC 4.0 · 2023",
    logo: "/media/35895bd8bbac968e.webp",
    description: "Powered POMAC 2.0 and also sponsored POMAC 4.0.",
    source: "https://www.tbsnews.net/bangladesh/education/bup-launches-first-round-pomac-20-324661",
  },
  {
    name: "IDLC Finance Limited",
    role: "Sponsor",
    context: "POMAC 4.0 · 2023",
    logo: "/media/67bab98919b59937.png",
    description: "Named among POMAC 4.0 sponsors in the event report.",
    source: "https://today.thefinancialexpress.com.bd/education-youth/pomac-40-comes-to-an-end-1697646793",
  },
  {
    name: "BRAC EPL Stock Brokerage Ltd",
    role: "Presenting sponsor",
    context: "POMAC 3.0 · 2022",
    description: "Presented the third edition of POMAC.",
    source: "https://thefinancialexpress.com.bd/home/first-round-for-pomac-30-concludes-1666199221",
  },
  {
    name: "BRAC Bank",
    role: "Powered by",
    context: "POMAC 3.0 · 2022",
    logo: "/media/3fa70fd835b7c1f0.webp",
    description: "Powered the third edition of POMAC.",
    source: "https://thefinancialexpress.com.bd/home/first-round-for-pomac-30-concludes-1666199221",
  },
  {
    name: "South Asian Network on Economic Modeling",
    role: "Strategic partner",
    context: "POMAC 2.0 · 2021",
    logo: "/media/107d337fd200694f.png",
    description: "SANEM documented its strategic partnership with the second edition.",
    source: "https://sanemnet.org/wp-content/uploads/2021/12/Thinking-Aloud_V8_N7.pdf",
  },
  {
    name: "Femina Flaunt",
    role: "Sponsor",
    context: "POMAC 4.0 · 2023",
    description: "Named among POMAC 4.0 sponsors in the event report.",
    source: "https://today.thefinancialexpress.com.bd/education-youth/pomac-40-comes-to-an-end-1697646793",
  },
  {
    name: "Sandra Foods Intl.",
    role: "Sponsor",
    context: "POMAC 4.0 · 2023",
    description: "Named among POMAC 4.0 sponsors in the event report.",
    source: "https://today.thefinancialexpress.com.bd/education-youth/pomac-40-comes-to-an-end-1697646793",
  },
  {
    name: "Centre for Policy Dialogue",
    role: "Strategic partner",
    context: "POMAC 5.0 · 2025",
    logo: "/media/dfcfae36b8ddaf16.png",
    description: "Shared policy expertise and mentorship with POMAC 5.0 participants.",
    source: "https://www.linkedin.com/posts/bup-economics-club_pomac2025-bupec-activity-7334977801294368768-uRp6",
  },
  {
    name: "Department of Economics, BUP",
    role: "Academic supervision",
    context: "All flagship programmes",
    description: "Supervises the club's flagship programmes at Bangladesh University of Professionals.",
  },
];

export const faqs = [
  {
    question: "Who can apply to join BUPEC?",
    answer:
      "Membership is open to students of Bangladesh University of Professionals, with the strongest fit for students of Economics and related disciplines. Recruitment runs through the club's annual intake, announced on our Facebook page and this website.",
  },
  {
    question: "Do I need research or debate experience?",
    answer:
      "No. Most members join with none. What matters is genuine curiosity about the economy and the willingness to show up, read and write. Training is part of the membership.",
  },
  {
    question: "How much time does membership take?",
    answer:
      "Expect a few hours a week during normal periods, more around flagship events such as POMAC and EconTalk. Teams are structured so that academic commitments come first.",
  },
  {
    question: "Can students from other universities take part?",
    answer:
      "Yes — through POMAC and open seminars. The competition is built for inter-university teams, and registration opens ahead of each edition.",
  },
  {
    question: "How can an organisation partner with the club?",
    answer:
      "Write to bupeconomicsclub@gmail.com with the subject line 'Partnership enquiry'. We work with sponsors, speakers and research collaborators across the year.",
  },
];

export const pathways = [
  {
    title: "Public policy & civil service",
    description:
      "Members move into government service, policy research and regulatory roles where economic reasoning is the working language.",
    tags: ["BCS", "Policy research", "Regulation"],
  },
  {
    title: "Banking & financial markets",
    description:
      "From commercial banks to treasury and risk desks, alumni apply the analytical habits built through case competitions.",
    tags: ["Banking", "Treasury", "Risk"],
  },
  {
    title: "Development & research",
    description:
      "Think tanks, development agencies and NGOs recruit from the same pool of students trained to read data carefully.",
    tags: ["Think tanks", "NGOs", "Field research"],
  },
  {
    title: "Academia & higher studies",
    description:
      "Many members continue to graduate study in economics, public policy and finance, at home and abroad.",
    tags: ["Masters", "PhD", "Scholarships"],
  },
  {
    title: "Consulting & corporate strategy",
    description:
      "Structured problem-solving and clear writing travel well into consulting, analytics and corporate strategy teams.",
    tags: ["Consulting", "Analytics", "Strategy"],
  },
  {
    title: "Entrepreneurship & media",
    description:
      "Some of our most visible alumni build ventures or explain the economy to a wider public through writing and broadcast.",
    tags: ["Ventures", "Economic writing", "Broadcast"],
  },
];
