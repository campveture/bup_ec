export type EventCategory = "Competition" | "Seminar" | "Learning" | "Workshop" | "Recruitment";

export type ClubEvent = {
  slug: string;
  name: string;
  fullName: string;
  category: EventCategory;
  edition: string;
  status: string;
  summary: string;
  about: string[];
  format: { label: string; description: string }[];
  highlights: string[];
  facts: { label: string; value: string }[];
  accent: string;
  mark: string;
  cover?: string;
  coverAlt?: string;
  source?: string;
  sourceLabel?: string;
};

export const events: ClubEvent[] = [
  {
    slug: "pomac",
    name: "POMAC",
    fullName: "BUP Inter-University Policy Making Competition",
    category: "Competition",
    edition: "6.0 · 2026",
    status: "Flagship · annual",
    summary:
      "Bangladesh's inter-university policy-making competition: investment case solving, policy dialogue and a final defence before a national jury.",
    about: [
      "POMAC is the club's largest undertaking. Teams from universities across Bangladesh are handed a live economic problem, given limited time and asked to produce something a real policymaker could defend.",
      "Across three rounds, participants move from investment case solving to structured policy dialogue, and finally to a presentation before a jury of academics and practitioners. The competition is designed to reward evidence, clarity and the ability to disagree well.",
      "The sixth edition concluded in September 2026 with Team Why Shaheens as champions. In 2025, BUP reported that 125 teams from more than 30 universities participated in POMAC 5.0.",
    ],
    format: [
      {
        label: "Round one",
        description:
          "Investment case solving — teams analyse a market, size the opportunity and defend a position under time pressure.",
      },
      {
        label: "Round two",
        description:
          "Policy dialogue — structured argument on a national economic question, with cross-examination from the jury.",
      },
      {
        label: "The final",
        description:
          "A detailed policy presentation and defence before a panel of economists, bankers and faculty members.",
      },
    ],
    highlights: [
      "POMAC 6.0 champions: Team Why Shaheens",
      "POMAC 6.0 runners-up: Team AAA and Team Pink Blueberry",
      "125 teams from over 30 universities at POMAC 5.0, according to BUP",
      "Closing and prize-giving ceremony at Bijoy Auditorium, BUP",
    ],
    facts: [
      { label: "Editions", value: "6" },
      { label: "2025 field", value: "125 teams" },
      { label: "Rounds", value: "3" },
      { label: "Open to", value: "All universities" },
    ],
    accent: "from-[#05233a] via-[#0b395d] to-[#146c90]",
    mark: "P",
    cover: "/media/334b63fe28ffde8c.jpg",
    coverAlt: "POMAC 5.0 winners and guests at the prize-giving ceremony",
  },
  {
    slug: "econtalk",
    name: "EconTalk",
    fullName: "Annual Economics Seminar",
    category: "Seminar",
    edition: "Annual · 2024 edition",
    status: "Flagship · annual",
    summary:
      "The club's annual seminar, organised with the Department of Economics, on the questions shaping Bangladesh's economy.",
    about: [
      "EconTalk is where the club turns outward. Each year it brings a current economic phenomenon into focus — through a keynote, a panel and an open conversation with students.",
      "The 2024 edition, held on 6 May, was titled 'The Emerging Digital Economy in Bangladesh: Unexplored Avenues of Taxation'. It examined how digital commerce is changing the tax base, and what a fair, workable response might look like.",
      "The seminar is organised by BUP Economics Club under the supervision of the Department of Economics, and is open to students across the university.",
    ],
    format: [
      {
        label: "Keynote",
        description:
          "A leading economist or practitioner frames the year's theme and the stakes behind it.",
      },
      {
        label: "Panel",
        description:
          "Academics, regulators and industry voices respond to one another on a shared question.",
      },
      {
        label: "Open floor",
        description:
          "Students put questions to the panel — the part of the evening the club is proudest of.",
      },
    ],
    highlights: [
      "2024 theme: the emerging digital economy and unexplored avenues of taxation",
      "Organised with the Department of Economics, BUP",
      "Panel of academics, regulators and industry practitioners",
      "Free and open to BUP students",
    ],
    facts: [
      { label: "Format", value: "Seminar" },
      { label: "Host", value: "Dept. of Economics" },
      { label: "Audience", value: "Open to BUP" },
      { label: "Cadence", value: "Annual" },
    ],
    accent: "from-[#062a3e] via-[#0c5471] to-[#1582a9]",
    mark: "E",
    cover: "/media/3d8ab4df0eed79d4.jpg",
    coverAlt: "EconTalk 2024 group photograph",
  },
  {
    slug: "econmaster",
    name: "EconMaster",
    fullName: "Learning & Skills Programme",
    category: "Learning",
    edition: "Ongoing · cohort based",
    status: "Flagship · annual",
    summary:
      "Workshops and masterclasses that make economics usable — from data literacy to policy writing.",
    about: [
      "EconMaster exists because knowing a model is not the same as being able to use one. The programme is built around practice: small cohorts, concrete exercises and feedback from people who do the work.",
      "Sessions cover the practical layer beneath an economics degree — reading a dataset, writing a policy brief, building a defensible argument and presenting it without slides doing all the talking.",
      "The programme is designed and delivered by members, with faculty and practitioner sessions where the topic calls for it.",
    ],
    format: [
      {
        label: "Workshops",
        description:
          "Hands-on sessions on data, Excel and statistical reasoning, with exercises completed in the room.",
      },
      {
        label: "Masterclasses",
        description:
          "Practitioners walk through how a real decision — a budget, an investment, a policy — was actually made.",
      },
      {
        label: "Peer review",
        description:
          "Members write, exchange and critique each other's briefs before anything is published.",
      },
    ],
    highlights: [
      "Small cohorts with practical, feedback-driven sessions",
      "Policy writing and data literacy at the core",
      "Delivered by members with faculty and practitioner input",
      "Feeds directly into POMAC and EconTalk preparation",
    ],
    facts: [
      { label: "Format", value: "Workshops" },
      { label: "Cohort", value: "Small groups" },
      { label: "Focus", value: "Applied skills" },
      { label: "Cadence", value: "Through the year" },
    ],
    accent: "from-[#083047] via-[#0e6e90] to-[#1f93b6]",
    mark: "M",
    cover: "/media/72d95dc7c0fe4a9a.jpg",
    coverAlt: "BUPEC members at the POMAC 3.0 launch",
    source: "https://www.linkedin.com/company/bup-economics-club",
    sourceLabel: "BUPEC LinkedIn",
  },
  {
    slug: "econsurge", name: "EconSurge", fullName: "BUPEC Recruitment Programme", category: "Recruitment", edition: "6.0 · documented edition", status: "Club intake",
    summary: "The club's recruitment event, taking applicants through registration, a micro-gig and discussion, and an interview.",
    about: ["EconSurge is the route into BUP Economics Club. A documented roadshow for EconSurge 6.0 describes a three-round selection process and introduces the club's working departments.", "The roadshow lists Admin, PR & Publications, Research & Development, Creative, and Operations as departments. Intake dates and application links change by edition; check BUPEC's current announcements before applying."],
    format: [
      { label: "Registration", description: "Applicants submit the registration form and a concise CV when intake opens." },
      { label: "Micro-gig & discussion", description: "The documented second round includes a micro-gig task and cluster discussion." },
      { label: "Personal interview", description: "Shortlisted applicants take part in an interview round." },
    ],
    highlights: ["Documented as EconSurge 6.0", "Three selection rounds", "Portfolios include research, creative, administration and operations"],
    facts: [{ label: "Purpose", value: "Recruitment" }, { label: "Documented edition", value: "6.0" }, { label: "Rounds", value: "3" }, { label: "Next intake", value: "To be announced" }],
    accent: "from-[#071f35] via-[#0b395d] to-[#1582a9]", mark: "S", cover: "/media/ab5a6847173edac7.jpg", coverAlt: "POMAC 4.0 presenters on stage", source: "https://www.scribd.com/document/917183021/Economics-Club-Roadshow", sourceLabel: "EconSurge roadshow",
  },
  {
    slug: "datalytics", name: "Datalytics", fullName: "Data Analytics Training", category: "Workshop", edition: "2022 edition", status: "Skills workshop",
    summary: "A day-long introduction to R and econometric modelling for economics students.",
    about: ["Datalytics is a BUPEC training event focused on practical data work. The documented 2022 session took place on 29 July and covered Introduction to R and Econometrics Modelling in R.", "The event is also named in BUPEC alumni records as one of the club's learning initiatives."],
    format: [{ label: "Introduction to R", description: "Getting started with the programming environment used for data analysis." }, { label: "Econometrics in R", description: "Applying econometric modelling in R." }],
    highlights: ["Documented 29 July 2022 session", "R and econometrics focus"],
    facts: [{ label: "Year", value: "2022" }, { label: "Format", value: "Day-long training" }, { label: "Tool", value: "R" }, { label: "Theme", value: "Econometrics" }],
    accent: "from-[#071f35] via-[#0b395d] to-[#1582a9]", mark: "D", cover: "/media/72d95dc7c0fe4a9a.jpg", coverAlt: "BUPEC members at the POMAC 3.0 launch", source: "https://jnu.ac.bd/profile/assets/cv/0d3180d672e08b4c5312dcdafdf6ef36.pdf", sourceLabel: "Speaker CV",
  },
  {
    slug: "enlightenomics", name: "Enlightenomics", fullName: "Book-based Economics Competition", category: "Competition", edition: "1.0 · 2025", status: "Club competition",
    summary: "A book-based competition from BUPEC's 2025 programme calendar.",
    about: ["Enlightenomics 1.0 is documented in a participant's LinkedIn record as a book-based competition organised by BUP Economics Club in October 2025.", "Additional round details and official photographs have not yet been verified."],
    format: [{ label: "Book-based challenge", description: "A reading-centred competition documented in participant records." }],
    highlights: ["First edition documented in October 2025", "Book-based competition"],
    facts: [{ label: "Edition", value: "1.0" }, { label: "Year", value: "2025" }, { label: "Format", value: "Book-based" }, { label: "Status", value: "Completed" }],
    accent: "from-[#071f35] via-[#0b395d] to-[#1582a9]", mark: "E", cover: "/media/334b63fe28ffde8c.jpg", coverAlt: "POMAC 5.0 winners and guests", source: "https://bd.linkedin.com/in/md-tanvir-taj", sourceLabel: "Participant LinkedIn",
  },
  {
    slug: "r-workshop", name: "From Data to Decisions", fullName: "An R-Powered Workshop", category: "Workshop", edition: "29–30 October 2025", status: "Skills workshop",
    summary: "A two-day R workshop on data handling, statistics and visualisation, organised with the Department of Economics.",
    about: ["The Department of Economics and BUP Economics Club held From Data to Decisions on 29–30 October 2025. Participant accounts describe two days of R training, from structured data management to statistical applications and visualisation.", "A club organiser's LinkedIn account reports 72 participants from different universities and sessions by researchers from CPD and BIGM."],
    format: [{ label: "Day one", description: "R foundations, logical functions, packages and structured data management." }, { label: "Day two", description: "Probability, statistical applications and data visualisation." }],
    highlights: ["29–30 October 2025", "72 participants reported by an organiser", "Researcher-led sessions from CPD and BIGM"],
    facts: [{ label: "Duration", value: "2 days" }, { label: "Year", value: "2025" }, { label: "Tool", value: "R" }, { label: "Participants", value: "72 reported" }],
    accent: "from-[#071f35] via-[#0b395d] to-[#1582a9]", mark: "R", cover: "/media/3d8ab4df0eed79d4.jpg", coverAlt: "EconTalk 2024 group photograph", source: "https://bd.linkedin.com/in/fatema-binta-alam-jim", sourceLabel: "Organiser LinkedIn",
  },
  {
    slug: "post-budget-analysis", name: "Post Budget Analysis", fullName: "Budget Discussion and Analysis", category: "Seminar", edition: "Documented 2019–2021", status: "Discussion series",
    summary: "A BUPEC discussion series examining Bangladesh's national budget with students and policy voices.",
    about: ["BUPEC alumni records document Post Budget Analysis among the club's events. A 2019 discussion is described as a collaboration with the Centre for Policy Dialogue.", "The club's wider EconTalk format also brings national budget questions into public student discussion."],
    format: [{ label: "Budget reading", description: "Reviewing the national budget and its policy choices." }, { label: "Discussion", description: "Students and invited policy voices examine the implications." }],
    highlights: ["2019 discussion recorded with CPD collaboration", "Documented in BUPEC alumni records"],
    facts: [{ label: "Type", value: "Discussion" }, { label: "Documented", value: "2019–2021" }, { label: "Topic", value: "National budget" }, { label: "Partner", value: "CPD in 2019" }],
    accent: "from-[#071f35] via-[#0b395d] to-[#1582a9]", mark: "B", cover: "/media/72d95dc7c0fe4a9a.jpg", coverAlt: "BUPEC members at the POMAC 3.0 launch", source: "https://liberalarts.temple.edu/sites/liberalarts/files/documents/CV-2.pdf", sourceLabel: "BUPEC alumni CV",
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}
