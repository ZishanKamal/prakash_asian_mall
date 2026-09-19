export const siteConfig = {
  name: "Prakash Asian Mall",
  shortName: "Prakash Asian Mall",
  tagline: "Experience the Heritage",
  description:
    "Prakash Asian Mall — a landmark heritage commercial destination on Fort Road, Gulbarga. Own a piece of heritage with premium retail shops now open for booking. Average rental yields of 6–10%.",
  // Update to the live domain before deploying.
  url: "https://www.prakashasianmall.com",
  locale: "en_IN",
  location: {
    label: "Fort Road, Gulbarga (Kalaburagi), Karnataka",
    street: "Fort Road",
    city: "Gulbarga (Kalaburagi)",
    state: "Karnataka",
    country: "India",
    // Approximate coordinates near Gulbarga Fort, Fort Road.
    lat: 17.3297,
    lng: 76.8343,
    mapsQuery: "Prakash+Asian+Mall+Fort+Road+Gulbarga",
    landmarks: [
      "Gulbarga Fort",
      "Kirana Bazar",
      "Cloth Bazar",
      "Main Chowk",
      "Jagat Circle",
    ],
  },
  contact: {
    contactPerson: "Vinod M. Tiwari",
    contactRole: "Co-Proprietor, Prakash Asian Mall",
    phones: ["+91 98860 38351", "+91 95383 51074", "+91 99860 47804"],
    email: "info@prakashasianmall.com",
    website: "www.prakashasianmall.com",
    residence:
      "260/A, 6th Main, 5th 'B' Cross, HAL 3rd Stage, Bangalore",
    mallAddress: "Prakash Asian Mall, Fort Road, Gulbarga, Karnataka",
  },
  brochurePath: "/prakash-asian-mall-brochure.pdf",
  partnership: "A Joint Development Venture between the Tiwari Family & Asian Builders",
} as const;

export const primaryPhoneDigits = "919886038351";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Floor Plans", href: "/floor-plans" },
  { label: "Shops", href: "/shops" },
  { label: "Gallery", href: "/gallery" },
  { label: "Invest", href: "/invest" },
  { label: "Owner", href: "/owner" },
  { label: "Contact", href: "/contact" },
] as const;
