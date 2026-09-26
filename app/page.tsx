import { Hero } from "@/components/home/Hero";
import { HeritageIntro } from "@/components/home/HeritageIntro";
import { Amenities } from "@/components/home/Amenities";
import { InfoTabs } from "@/components/home/InfoTabs";
import { FloorPlansPreview } from "@/components/home/FloorPlansPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { BookingCTA } from "@/components/home/BookingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HeritageIntro />
      <Amenities />
      <InfoTabs />
      <FloorPlansPreview />
      <GalleryPreview />
      <BookingCTA />
    </>
  );
}
