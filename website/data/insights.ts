export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  pullQuote: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "digital-economy-taxation",
    title: "The emerging digital economy in Bangladesh: unexplored avenues of taxation",
    category: "Taxation",
    date: "May 2024",
    readTime: "6 min read",
    excerpt:
      "Digital commerce grew faster than the rules meant to tax it. A working note on where the base is moving, and why the answer is not simply a new levy.",
    pullQuote:
      "The question is not whether the digital economy should be taxed, but whether the state can see it clearly enough to tax it fairly.",
    sections: [
      {
        paragraphs: [
          "Bangladesh's digital economy has expanded along a familiar arc: platforms first, formalisation later. Payments, ride-hailing, food delivery and freelance work now touch households that the traditional tax net never reached. That is an opportunity and a problem at the same time.",
          "The opportunity is a wider base. The problem is that most of the activity is intermediated by platforms whose records sit outside the domestic filing system, and by individuals whose income is irregular by design.",
        ],
      },
      {
        heading: "Where the base actually moves",
        paragraphs: [
          "Three channels matter most. First, platform intermediation: a single company can hold the transaction records for thousands of micro-suppliers. Second, cross-border services: a subscription paid in Dhaka may be booked in Singapore. Third, the informal-to-formal transition, where a vendor who once took cash now takes a wallet payment and generates a trail for the first time.",
          "Each channel needs a different instrument. Withholding at the platform is administratively cheap. Destination-based rules on cross-border services require treaty capacity. Formalisation incentives work only if the compliance cost is visibly lower than the benefit.",
        ],
      },
      {
        heading: "Why a new levy is the easy answer",
        paragraphs: [
          "A headline tax on 'digital services' is politically legible and administratively tempting. It also tends to land on consumers, to be passed through by platforms, and to raise less than projected once avoidance and pass-through are accounted for.",
          "The harder, more durable work is data: matching platform records to tax identifiers, building a risk engine that can flag unreported flows, and giving small vendors a compliance path that costs less than the tax itself.",
        ],
      },
      {
        heading: "What students can add",
        paragraphs: [
          "Policy debate on digital taxation is often conducted with very little public evidence. Student researchers can close part of that gap: mapping platform flows, estimating effective rates, and testing whether compliance burdens fall disproportionately on small vendors.",
          "That is the kind of work EconTalk is meant to provoke — a seminar that ends with questions worth carrying into a research brief.",
        ],
      },
    ],
  },
  {
    slug: "pomac-5-lessons",
    title: "What POMAC 5.0 taught us about policy design",
    category: "Competition",
    date: "June 2025",
    readTime: "5 min read",
    excerpt:
      "BUP reported 125 teams from over 30 universities. Notes on what separates a good policy answer from a workable one.",
    pullQuote:
      "The strongest teams did not have the most data. They had the clearest account of what they did not know.",
    sections: [
      {
        paragraphs: [
          "POMAC 5.0 closed at the Bijoy Auditorium with more teams than any previous edition. Watching three rounds from the jury side makes certain patterns hard to miss — and useful for anyone preparing for the next one.",
        ],
      },
      {
        heading: "Define the problem before the solution",
        paragraphs: [
          "The most common failure was a polished intervention attached to a vaguely stated problem. Teams that spent their first minutes naming the constraint, the actor and the timeline produced sharper proposals, even with less data.",
          "A useful test: if your recommendation would be the same under a different diagnosis, you have not diagnosed anything.",
        ],
      },
      {
        heading: "Costs are part of the argument",
        paragraphs: [
          "Policy proposals were often evaluated as if implementation were free. Teams that addressed financing, administrative capacity and political feasibility scored consistently better, because they had answered the question a real ministry would ask first.",
        ],
      },
      {
        heading: "The final is a conversation",
        paragraphs: [
          "The strongest finalists treated the defence as a discussion rather than a recital. They conceded weak points, distinguished between what the evidence showed and what they inferred, and left the jury with a next step.",
          "That is also a decent description of how the club tries to run its own research: state the claim, show the support, name the limit.",
        ],
      },
    ],
  },
  {
    slug: "reading-the-budget",
    title: "How to read a national budget as a student",
    category: "Guide",
    date: "July 2026",
    readTime: "7 min read",
    excerpt:
      "A budget is not a spreadsheet of intentions. It is a set of choices about who pays, who receives and what the state has decided to stop doing.",
    pullQuote:
      "Read the budget the way you read an argument: ask what is being measured, what is being left out, and who benefits from the framing.",
    sections: [
      {
        paragraphs: [
          "Every June, the budget document arrives with a headline number and a set of promises attached. Most commentary stops at the headline. Reading it properly takes an afternoon and four questions.",
        ],
      },
      {
        heading: "1. Compare the plan to the outturn",
        paragraphs: [
          "Budgeted figures are targets. Revised estimates are closer to reality, and actual expenditure is what happened. A line that is consistently under-executed is a signal about administrative capacity, not just about priorities.",
        ],
      },
      {
        heading: "2. Separate revenue from financing",
        paragraphs: [
          "Tax revenue, non-tax revenue and borrowing are not interchangeable. A deficit financed by domestic borrowing has different consequences from one financed externally, and the composition matters more than the size.",
        ],
      },
      {
        heading: "3. Follow the tax incidence",
        paragraphs: [
          "Who actually bears a tax is rarely the party named in the schedule. Look for pass-through, exemptions and the informal share of the sector being taxed. A well-designed tax with a large exemption list can raise little and distort a lot.",
        ],
      },
      {
        heading: "4. Read the silence",
        paragraphs: [
          "What is not funded is also a decision. Compare this year's allocation to last year's in real terms, and to the stated policy priority. A programme that grows below inflation is being quietly deprioritised.",
        ],
      },
      {
        heading: "A workable routine",
        paragraphs: [
          "Read the budget speech for the argument, the annexes for the numbers, and the ministry-level allocations for the reality. Then write two hundred words on the single choice you would reverse. That exercise, repeated each year, is worth more than any summary.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
