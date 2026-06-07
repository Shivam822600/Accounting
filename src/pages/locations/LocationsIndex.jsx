import { useState, useMemo } from 'react';
import Hero from '../../components/Hero.jsx';
import SectionHeader from '../../components/SectionHeader.jsx';
import LocationCard from '../../components/LocationCard.jsx';
import CTASection from '../../components/CTASection.jsx';
import { locations } from '../../data/siteData.js';
import { siteAssets } from '../../assets/siteAssets.js';

export default function LocationsIndex() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('All');

  // Extract all unique service tags across all locations for filtering
  const allServices = useMemo(() => {
    const servicesSet = new Set();
    locations.forEach(loc => {
      if (loc.services) {
        loc.services.forEach(s => servicesSet.add(s));
      }
    });
    return ['All', ...Array.from(servicesSet)];
  }, []);

  // Filter locations dynamically based on search query and selected service filter
  const filteredLocations = useMemo(() => {
    return locations.filter(loc => {
      const matchesSearch = 
        loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (loc.intro && loc.intro.toLowerCase().includes(searchQuery.toLowerCase())) ||
        loc.slug.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesService = 
        selectedService === 'All' || 
        (loc.services && loc.services.includes(selectedService));

      return matchesSearch && matchesService;
    });
  }, [searchQuery, selectedService]);

  return (
    <>
      <Hero
        compact
        eyebrow="Locations"
        title="Our Service Locations"
        subtitle="Discover the areas we proudly serve across Melbourne's northern suburbs"
        image={siteAssets.homeHero}
      />
      
      <section className="section bg-[#F8FAFC]">
        <div className="container-page">
          <SectionHeader
            title="Service Suburbs & Offices"
            subtitle="Providing strategic CPA-led accounting solutions directly to local communities"
            center
          />

          {/* Search and Interactive Filter Bar */}
          <div className="mb-10 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
              {/* Suburb Search */}
              <div className="relative">
                <label htmlFor="suburb-search" className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Search by suburb or postcode
                </label>
                <div className="relative">
                  <input
                    id="suburb-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. Bundoora, Mill Park, Lalor..."
                    className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-4 text-sm text-navy placeholder-slate-400 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/10"
                  />
                  <svg className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy text-xs font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Service Filter */}
              <div>
                <label htmlFor="service-filter" className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Filter by required service
                </label>
                <select
                  id="service-filter"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white py-3 px-4 text-sm text-navy outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/10 cursor-pointer"
                >
                  {allServices.map(srv => (
                    <option key={srv} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Filter Summary */}
            {(searchQuery || selectedService !== 'All') && (
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs">
                <span className="font-semibold text-slate-500">
                  Showing {filteredLocations.length} {filteredLocations.length === 1 ? 'location' : 'locations'}
                </span>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedService('All');
                  }}
                  className="font-bold text-navy hover:text-gold transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Locations Grid */}
          {filteredLocations.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredLocations.map((loc) => (
                <LocationCard key={loc.slug} location={loc} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-400 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy">No locations found</h3>
              <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
                We couldn't find any location serving "{searchQuery}" that offers the selected service. Try clearing your search or contact our main Epping office for assistance.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedService('All');
                }}
                className="mt-5 rounded-lg bg-navy px-4 py-2 text-xs font-bold text-white transition hover:bg-gold hover:text-navy"
              >
                Show All Locations
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trust banner about Centralized support */}
      <section className="bg-navy py-12 text-white">
        <div className="container-page px-5 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Centralized Expertise, Localized Care</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
            While we support multiple suburbs across Melbourne, all advisory and lodgements are processed directly by our CPA-qualified core team at Gateway Boulevard in Epping. Get local support with the back-end scale of a major firm.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
