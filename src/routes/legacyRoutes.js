import { locations, services } from '../data/siteData.js';

export const legacyServiceRoutes = [
  { path: 'Services/bookkeeping.html', slug: services[0].slug },
  { path: 'Services/taxtation.html', slug: services[1].slug },
  // { path: 'Services/BussinessAdvisory.html', slug: services[2].slug },
  { path: 'Services/smsf.html', slug: services[2].slug },
  // { path: 'Services/MedicalAccountant.html', slug: services[4].slug },
];

export const legacyLocationRoutes = locations.map((location) => ({
  path: `location/${location.legacy}`,
  slug: location.slug,
}));
