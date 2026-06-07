import Hero from '../../components/Hero.jsx';
import SectionHeader from '../../components/SectionHeader.jsx';
import LocationCard from '../../components/LocationCard.jsx';
import CTASection from '../../components/CTASection.jsx';
import { locations } from '../../data/siteData.js';
import { siteAssets } from '../../assets/siteAssets.js';

export default function LocationsIndex() {
  return (
    <>
      <Hero
        compact
        eyebrow="Locations"
        title="Our Service Locations"
        subtitle="Discover the areas we proudly serve across Melbourne"
        image={siteAssets.homeHero}
      />
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            title="Locations"
            subtitle="Explore our offices and the communities we support"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {locations.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
