import { Hero } from "@/components/home/Hero";
import { HeritageIntro } from "@/components/home/HeritageIntro";
import { Amenities } from "@/components/home/Amenities";
import { FeaturedShops } from "@/components/home/FeaturedShops";
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
      <FeaturedShops />
      <InfoTabs />
      <FloorPlansPreview />
      <GalleryPreview />
      <BookingCTA />
    </>
  );
}
