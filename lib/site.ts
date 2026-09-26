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
    mapsQuery: "Prakash+Asian+Mall+booking+office",
    landmarks: [
      "Gulbarga Fort",
      "Kirana Bazar",
      "Cloth Bazar",
      "Main Chowk",
      "Jagat Circle",
    ],
  },
  contact: {
    contactPerson: "Vishal Vinod Tiwari",
    contactRole: "Co-Proprietor, Prakash Asian Mall",
    phones: ["+91 98453 65065"],
    email: "info@prakashasianmall.com",
    website: "www.prakashasianmall.com",
    residence:
      "260/A, 6th Main, 5th 'B' Cross, HAL 3rd Stage, Bangalore",
    mallAddress: "Prakash Asian Mall, Fort Road, Gulbarga, Karnataka",
  },
  brochurePath: "/prakash-asian-mall-brochure.pdf",
  partnership: "A Joint Development Venture between the Tiwari Family & Asian Builders",
} as const;

export const primaryPhoneDigits = "919845365065";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Owner", href: "/owner" },
  { label: "Why Invest?", href: "/invest" },
  { label: "Gallery", href: "/gallery" },
  { label: "Floor Plans", href: "/floor-plans" },
  { label: "Contact", href: "/contact" },
] as const;
