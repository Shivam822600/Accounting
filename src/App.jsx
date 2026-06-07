import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import ServicesIndex from './pages/services/ServicesIndex.jsx';
import BookkeepingAccounting from './pages/services/Bookeeping.jsx';
import TaxationService from './pages/services/TaxationService.jsx';
import BusinessAdvisory from './pages/services/BussinessAdvisory.jsx';
import SMSFServices from './pages/services/SMSF.jsx';
import MedicalAccountants from './pages/services/MedicalAccountant.jsx';
import LocationsIndex from './pages/locations/LocationsIndex.jsx';
import LocationDetail from './pages/locations/LocationDetail.jsx';
import NotFound from './pages/NotFound.jsx';
import { legacyLocationRoutes, legacyServiceRoutes } from './routes/legacyRoutes.js';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="home.html" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about.html" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog.html" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact.html" element={<Contact />} />
        <Route path="services" element={<ServicesIndex />} />
        <Route path="Services/main.html" element={<Navigate to="/services" replace />} />
        <Route path="services/bookkeeping-accounting" element={<BookkeepingAccounting />} />
        <Route path="services/taxation" element={<TaxationService />} />
        <Route path="services/business-advisory" element={<BusinessAdvisory />} />
        <Route path="services/smsf-accountants" element={<SMSFServices />} />
        <Route path="services/medical-accountants" element={<MedicalAccountants />} />
        <Route path="locations" element={<LocationsIndex />} />
        <Route path="locations/:slug" element={<LocationDetail />} />
        {legacyServiceRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Navigate to={`/services/${route.slug}`} replace />}
          />
        ))}
        {legacyLocationRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Navigate to={`/locations/${route.slug}`} replace />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
