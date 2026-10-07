import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import NotificationToast from './components/NotificationToast';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import LifeAtInf from './pages/LifeAtInf';
import Pricing from './pages/Pricing';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import LegalPage from './pages/LegalPage';

// Auto scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#0a0c10' }}>
        <Navbar onOpenConsultModal={() => setIsConsultModalOpen(true)} />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenConsultModal={() => setIsConsultModalOpen(true)}
                  onShowToast={showToast}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  onOpenConsultModal={() => setIsConsultModalOpen(true)}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects
                  onOpenConsultModal={() => setIsConsultModalOpen(true)}
                />
              }
            />
            <Route
              path="/services"
              element={
                <Services
                  onOpenConsultModal={() => setIsConsultModalOpen(true)}
                />
              }
            />
            <Route path="/life" element={<LifeAtInf />} />
            <Route
              path="/pricing"
              element={
                <Pricing
                  onOpenConsultModal={() => setIsConsultModalOpen(true)}
                  onShowToast={showToast}
                />
              }
            />
            <Route
              path="/careers"
              element={<Careers onShowToast={showToast} />}
            />
            <Route
              path="/contact"
              element={<Contact onShowToast={showToast} />}
            />
            <Route
              path="/admin"
              element={<AdminDashboard onShowToast={showToast} />}
            />

            {/* Legal routes */}
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/term-condition" element={<LegalPage />} />
            <Route path="/shipping-policy" element={<LegalPage />} />
            <Route path="/refund-policy" element={<LegalPage />} />

            {/* Fallback */}
            <Route
              path="*"
              element={
                <Home
                  onOpenConsultModal={() => setIsConsultModalOpen(true)}
                  onShowToast={showToast}
                />
              }
            />
          </Routes>
        </main>

        <Footer onShowToast={showToast} />

        <ConsultationModal
          isOpen={isConsultModalOpen}
          onClose={() => setIsConsultModalOpen(false)}
          onSuccess={(msg) => showToast(msg, 'success')}
        />

        <NotificationToast
          toast={toast}
          onClose={() => setToast(null)}
        />
      </div>
    </Router>
  );
}
