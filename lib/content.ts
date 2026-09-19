import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Snowflake,
  Wind,
  ArrowUpDown,
  Zap,
  Car,
  Gem,
  Lightbulb,
  DoorOpen,
  Footprints,
  PanelsTopLeft,
  Landmark,
} from "lucide-react";

export type Amenity = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** Amenities & specifications sourced from the walkthrough narration. */
export const amenities: Amenity[] = [
  {
    title: "Classical Heritage Elevation",
    description:
      "A fort-inspired façade that reflects Gulbarga's architectural heritage of the Bahmani era.",
    icon: Landmark,
  },
  {
    title: "Mall + High-Street Retail",
    description:
      "A unique combination of an air-conditioned mall and vibrant high-street shopping under one roof.",
    icon: Building2,
  },
  {
    title: "Grand Double-Height Entry",
    description:
      "An imposing double-height entrance with wide sidewalks and multiple access points from the main roads.",
    icon: DoorOpen,
  },
  {
    title: "Escalators — Up & Down",
    description:
      "State-of-the-art escalators for smooth upward and downward movement across every level.",
    icon: ArrowUpDown,
  },
  {
    title: "Capsule Lifts",
    description:
      "Two high-capacity glass capsule lifts for effortless vertical access and a premium experience.",
    icon: PanelsTopLeft,
  },
  {
    title: "Air-Conditioned Shops",
    description:
      "Individual air conditioning for every shop with a dedicated cooling system for common areas.",
    icon: Snowflake,
  },
  {
    title: "24×7 Power Backup",
    description:
      "Uninterrupted power backup for all shops and common areas, round the clock.",
    icon: Zap,
  },
  {
    title: "Basement Car Parking",
    description:
      "Ample, secure car parking in the basement for shoppers, tenants and staff.",
    icon: Car,
  },
  {
    title: "Premium Finishes",
    description:
      "Designed in granite, marble and vitrified tiles with elegant vitrified flooring throughout.",
    icon: Gem,
  },
  {
    title: "False Ceiling & Décor Lighting",
    description:
      "False ceilings and decorative lighting elevate the ambience across all common areas.",
    icon: Lightbulb,
  },
  {
    title: "Wide Sidewalks",
    description:
      "Generous, walkable sidewalks and corridors designed for high footfall and comfort.",
    icon: Footprints,
  },
  {
    title: "Cooling for Common Areas",
    description:
      "A dedicated cooling system keeps atriums and corridors comfortable year-round.",
    icon: Wind,
  },
];

export type InvestReason = {
  title: string;
  description: string;
  stat?: string;
};

export const investReasons: InvestReason[] = [
  {
    title: "Attractive Rental Yields",
    stat: "6–10%",
    description:
      "Commercial spaces typically deliver an average rental yield of 6% to 10% — significantly higher than residential real estate.",
  },
  {
    title: "Capital Appreciation",
    stat: "Long-term",
    description:
      "Steady increase in capital value driven by Gulbarga's rapid growth as a Smart City and tier-2 retail hub.",
  },
  {
    title: "Portfolio Diversification",
    stat: "Balance",
    description:
      "A tangible, income-generating asset that diversifies your portfolio beyond equities and residential property.",
  },
  {
    title: "Lower Volatility",
    stat: "Stability",
    description:
      "Compared to other markets, commercial property is less impacted by short-term news and events.",
  },
];

export const propertyDocuments: string[] = [
  "Title Deed",
  "Property Tax Receipts",
  "Encumbrance Certificate",
  "Commencement Certificate",
  "Completion Certificate",
  "Occupancy Certificate",
];

/** Sections of the "About" story, extracted and lightly enhanced from the brochure. */
export const aboutContent = {
  heritage: {
    title: "A Legacy Carved in Stone",
    body: [
      "Celebrating the grandeur of Gulbarga's heritage monument — the Gulbarga Fort — almost a stone's throw away from it stood the beloved Prakash Talkies for 75 years, the flagship of the Tiwari family.",
      "This ancestral property in the heart of Gulbarga city has always been a prestigious and well-known landmark in the Hyderabad–Karnataka region. The road leading to the mall carries the family name — Hiralal Tiwari Marg.",
      "Vinod Tiwari and Late Prakash Tiwari, along with their families, are today the co-proprietors of Prakash Asian Mall. Honouring this historic connection, the mall captures the essence of history in its very structure — without compromising on modern, state-of-the-art infrastructure.",
    ],
  },
  gulbarga: {
    title: "About Gulbarga",
    body: [
      "Gulbarga is known as the educational and political capital of Karnataka, and has been nominated as one of the cities to be developed under the Union Government's Smart City initiative.",
      "It is one of the fastest-growing cities in the state — an educational nerve centre with two prestigious universities and numerous medical and engineering colleges. It is home to one of the largest ESI hospitals and medical townships in India, and has its own High Court.",
      "With the e-commerce boom, larger-format retailers are making major imprints in tier-2 cities. We believe Gulbarga is firmly at the forefront of that growth — and the real estate market is already responding with exponential appreciation.",
    ],
  },
  builders: {
    title: "About Asian Builders",
    body: [
      "Established in 2003, Asian Builders are recognised throughout Gulbarga for their passionate and excellent creations.",
      "They stand tall among Gulbarga's builders with more than 10 successful projects covering over 1 million sq. ft — spanning commercial, residential and retail developments. Their landmark developments bear characteristic hallmarks: technical excellence, impeccable quality, spacious accommodation and completion on schedule.",
      "Standing on approximately 95,000 sq. ft of land, Prakash Asian Mall is the biggest and grandest of their projects.",
    ],
  },
};

export const ownerContent = {
  name: "Vishal Vinod Tiwari",
  roleLine: "Corporate Leader · Motorsport Athlete · Entrepreneur",
  titles:
    "Owner, Prakash Asian Mall  ·  Senior Director, Teleperformance  ·  Founder, BoxBox Motorsport Café",
  paragraphs: [
    "Vishal Vinod Tiwari is a business executive, entrepreneur and motorsport athlete based in Bengaluru, with deep-rooted family ties to Kalaburagi (formerly Gulbarga), Karnataka.",
    "With more than 25 years of professional experience, Vishal has built a career in global business services, customer experience, operations, training and quality leadership. He currently serves as a Senior Director at Teleperformance, working with global teams and international markets.",
    "Outside the corporate world, motorsport has been a defining passion for over 25 years. Competing under the identity VishRacing, he has participated in drag racing, autocross and hill-climb events, recording more than 100 podium finishes across regional and national competition.",
    "His passion for motorsport has also evolved into entrepreneurship. Vishal is the founder of BoxBox Motorsport Café in Indiranagar, Bengaluru — a motorsport-themed café and racing-simulator experience created to bring competitive racing and motorsport culture to a wider audience.",
    "Vishal is a fourth-generation descendant of Hiralal Tiwari, whose family has longstanding roots in the historic Fort Road and Khila Colony areas of Kalaburagi. Hiralal Tiwari Marg, in the Fort Road area, carries the Tiwari name.",
    "His father, Vinod Madanlal Tiwari (1953–2023), continued the family's connection with Kalaburagi. Today, Vishal represents the next generation of that legacy through his association with Prakash Asian Mall — while building his own career in global corporate leadership, motorsport and entrepreneurship.",
  ],
  pillars: ["Corporate Leadership", "Motorsport", "Entrepreneurship", "Heritage"],
};

export const heritageHighlights = [
  "Exterior inspired by the Gulbarga Fort",
  "State-of-the-art modern interiors",
  "Grand double-height entry",
  "Multiple entrances from main roads",
];
