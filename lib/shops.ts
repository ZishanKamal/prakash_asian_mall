export type FloorId = "lower-ground" | "upper-ground" | "first-floor";

export type Shop = {
  id: string;
  floor: FloorId;
  floorLabel: string;
  area: number; // carpet area in sq. ft
  status: "available" | "leased";
  facing: "Main Road" | "Atrium" | "Corner" | "Corridor";
  isPremium: boolean;
  /** Illustrative indicative monthly rental (INR) — used to convey rental potential. */
  indicativeRent?: number;
  /** Category of the tenant for leased units, or the ideal use for available units. */
  suitedFor: string;
  highlights: string[];
};

export const floors: {
  id: FloorId;
  label: string;
  image: string;
  zoomImage?: string;
  blurb: string;
}[] = [
  {
    id: "lower-ground",
    label: "Lower Ground",
    image: "/layouts/lower-ground.png",
    blurb:
      "High-footfall value retail level connected to the central atrium and basement parking.",
  },
  {
    id: "upper-ground",
    label: "Upper Ground",
    image: "/layouts/upper-ground.png",
    zoomImage: "/layouts/upper-ground-zoom.png",
    blurb:
      "The signature street-level floor with direct main-road frontage and the grand entry.",
  },
  {
    id: "first-floor",
    label: "First Floor",
    image: "/layouts/first-floor.png",
    zoomImage: "/layouts/first-floor-zoom.png",
    blurb:
      "Fashion, lifestyle and F&B level opening onto landscaped open terraces.",
  },
];

export const basementFloor = {
  id: "basement-parking" as const,
  label: "Basement Parking",
  image: "/layouts/basement-parking.png",
  blurb:
    "Ample secure car parking with dedicated stores and services along the perimeter.",
};

/**
 * Representative shop inventory derived from the floor-plan unit grid.
 * Rental figures are indicative and provided to illustrate income potential.
 */
export const shops: Shop[] = [
  // Upper Ground — prime main-road frontage
  { id: "UG-31", floor: "upper-ground", floorLabel: "Upper Ground", area: 239, status: "available", facing: "Main Road", isPremium: true, indicativeRent: 47000, suitedFor: "Flagship apparel / footwear", highlights: ["Main-road frontage", "Grand entry proximity", "Double-height visibility"] },
  { id: "UG-32", floor: "upper-ground", floorLabel: "Upper Ground", area: 239, status: "available", facing: "Main Road", isPremium: true, indicativeRent: 47000, suitedFor: "Jewellery / accessories", highlights: ["Main-road frontage", "High footfall"] },
  { id: "UG-33", floor: "upper-ground", floorLabel: "Upper Ground", area: 261, status: "leased", facing: "Main Road", isPremium: true, indicativeRent: 52000, suitedFor: "Branded apparel", highlights: ["Corner visibility", "Prime frontage"] },
  { id: "UG-40", floor: "upper-ground", floorLabel: "Upper Ground", area: 274, status: "available", facing: "Corner", isPremium: true, indicativeRent: 55000, suitedFor: "Café / QSR", highlights: ["Corner unit", "Two-side visibility"] },
  { id: "UG-47", floor: "upper-ground", floorLabel: "Upper Ground", area: 239, status: "leased", facing: "Atrium", isPremium: false, indicativeRent: 43000, suitedFor: "Mobile & electronics", highlights: ["Atrium facing", "Escalator adjacency"] },
  { id: "UG-52", floor: "upper-ground", floorLabel: "Upper Ground", area: 246, status: "available", facing: "Atrium", isPremium: false, indicativeRent: 44000, suitedFor: "Cosmetics / wellness", highlights: ["Atrium facing", "Central location"] },
  { id: "UG-75", floor: "upper-ground", floorLabel: "Upper Ground", area: 239, status: "available", facing: "Corridor", isPremium: false, indicativeRent: 40000, suitedFor: "Optical / services", highlights: ["Wide corridor", "Steady footfall"] },
  { id: "UG-78", floor: "upper-ground", floorLabel: "Upper Ground", area: 233, status: "leased", facing: "Corridor", isPremium: false, indicativeRent: 39000, suitedFor: "Bakery", highlights: ["Corridor unit"] },

  // Lower Ground — value retail, high volume
  { id: "LG-12", floor: "lower-ground", floorLabel: "Lower Ground", area: 239, status: "available", facing: "Main Road", isPremium: true, indicativeRent: 38000, suitedFor: "Hypermarket / grocery", highlights: ["Main-road access", "Parking adjacency"] },
  { id: "LG-15", floor: "lower-ground", floorLabel: "Lower Ground", area: 258, status: "available", facing: "Atrium", isPremium: false, indicativeRent: 36000, suitedFor: "Home & kitchen", highlights: ["Atrium facing", "High volume"] },
  { id: "LG-23", floor: "lower-ground", floorLabel: "Lower Ground", area: 239, status: "leased", facing: "Atrium", isPremium: false, indicativeRent: 34000, suitedFor: "Toys & gifting", highlights: ["Atrium facing"] },
  { id: "LG-31", floor: "lower-ground", floorLabel: "Lower Ground", area: 244, status: "available", facing: "Corner", isPremium: true, indicativeRent: 40000, suitedFor: "Ice-cream / dessert", highlights: ["Corner unit", "Near escalator"] },
  { id: "LG-44", floor: "lower-ground", floorLabel: "Lower Ground", area: 231, status: "available", facing: "Corridor", isPremium: false, indicativeRent: 31000, suitedFor: "Stationery / books", highlights: ["Wide corridor"] },
  { id: "LG-47", floor: "lower-ground", floorLabel: "Lower Ground", area: 236, status: "leased", facing: "Corridor", isPremium: false, indicativeRent: 32000, suitedFor: "Footwear", highlights: ["Corridor unit"] },

  // First Floor — lifestyle, F&B and terraces
  { id: "FF-08", floor: "first-floor", floorLabel: "First Floor", area: 268, status: "available", facing: "Atrium", isPremium: true, indicativeRent: 42000, suitedFor: "Fine-dine restaurant", highlights: ["Terrace access", "Atrium views"] },
  { id: "FF-11", floor: "first-floor", floorLabel: "First Floor", area: 252, status: "available", facing: "Corner", isPremium: true, indicativeRent: 41000, suitedFor: "Family entertainment", highlights: ["Corner unit", "Open-terrace adjacency"] },
  { id: "FF-14", floor: "first-floor", floorLabel: "First Floor", area: 239, status: "leased", facing: "Atrium", isPremium: false, indicativeRent: 35000, suitedFor: "Salon & spa", highlights: ["Atrium facing"] },
  { id: "FF-19", floor: "first-floor", floorLabel: "First Floor", area: 246, status: "available", facing: "Corridor", isPremium: false, indicativeRent: 33000, suitedFor: "Ethnic wear", highlights: ["Wide corridor", "Fashion zone"] },
  { id: "FF-22", floor: "first-floor", floorLabel: "First Floor", area: 240, status: "leased", facing: "Corridor", isPremium: false, indicativeRent: 34000, suitedFor: "Kids' fashion", highlights: ["Fashion zone"] },
  { id: "FF-27", floor: "first-floor", floorLabel: "First Floor", area: 275, status: "available", facing: "Main Road", isPremium: true, indicativeRent: 44000, suitedFor: "Café / lounge", highlights: ["Terrace frontage", "Premium corner"] },
];

export const shopStats = {
  totalUnits: shops.length,
  available: shops.filter((s) => s.status === "available").length,
  leased: shops.filter((s) => s.status === "leased").length,
  floors: 3,
  landAreaSqft: 95000,
};

/** An individual shop within an available section — sold separately, price on request. */
export type AvailableUnit = { no: string; area: number };

/** The marked, currently-available sections on the plans (Upper Ground + First Floor). */
export type AvailableSection = {
  id: string;
  floor: FloorId;
  floorLabel: string;
  title: string;
  note: string;
  units: AvailableUnit[];
  totalArea: number;
};

export const availableSections: AvailableSection[] = [
  {
    id: "ug-31-32",
    floor: "upper-ground",
    floorLabel: "Upper Ground",
    title: "UG-31 & UG-32",
    note: "Prime main-corridor frontage, close to the grand entry.",
    units: [
      { no: "UG-31", area: 220 },
      { no: "UG-32", area: 220 },
    ],
    totalArea: 440,
  },
  {
    id: "ug-33-83",
    floor: "upper-ground",
    floorLabel: "Upper Ground",
    title: "UG-33 & UG-83",
    note: "Units along the 10'-0\" wide corridor.",
    units: [
      { no: "UG-33", area: 130 },
      { no: "UG-83", area: 130 },
    ],
    totalArea: 260,
  },
  {
    id: "ff-block-a",
    floor: "first-floor",
    floorLabel: "First Floor",
    title: "Block A",
    note: "First-floor block facing the open terrace.",
    units: [
      { no: "FF-48", area: 360 },
      { no: "FF-42", area: 360 },
    ],
    totalArea: 720,
  },
  {
    id: "ff-block-b",
    floor: "first-floor",
    floorLabel: "First Floor",
    title: "Block B",
    note: "First-floor block facing the open terrace.",
    units: [
      { no: "FF-49", area: 360 },
      { no: "FF-41", area: 360 },
    ],
    totalArea: 720,
  },
  {
    id: "ff-block-c",
    floor: "first-floor",
    floorLabel: "First Floor",
    title: "Block C",
    note: "First-floor block facing the open terrace.",
    units: [
      { no: "FF-50", area: 360 },
      { no: "FF-40", area: 360 },
    ],
    totalArea: 720,
  },
  {
    id: "ff-block-d",
    floor: "first-floor",
    floorLabel: "First Floor",
    title: "Block D",
    note: "Six units along the wide corridor.",
    units: [
      { no: "FF-51/1", area: 122 },
      { no: "FF-51/2", area: 122 },
      { no: "FF-51/3", area: 122 },
      { no: "FF-39/2", area: 122 },
      { no: "FF-39/1", area: 122 },
      { no: "FF-38", area: 122 },
    ],
    totalArea: 732,
  },
];

export const availableSectionCount = availableSections.length;

/** Every available shop as an individual unit — sold separately, Price on Request. */
export type AvailableUnitDetail = AvailableUnit & {
  floor: FloorId;
  floorLabel: string;
  note: string;
};

export const availableUnits: AvailableUnitDetail[] = availableSections.flatMap((s) =>
  s.units.map((u) => ({
    ...u,
    floor: s.floor,
    floorLabel: s.floorLabel,
    note: s.note,
  })),
);

export const availableUnitCount = availableUnits.length;
