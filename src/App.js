import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import ProductDetail from './Components/Product/ProductDetail';
import Product from './pages/Product';
import CustomProduct from './pages/CustomProduct';
import NotFoundPage from './pages/NotFoundPage';
import { HelmetProvider } from 'react-helmet-async';
import FAQDB from './pages/FAQDB';
import FAQCP from './pages/FAQCP';
import FAQDF from './pages/FAQDF';
import FAQHR from './pages/FAQHR';
import FAQRS from './pages/FAQRS';
import FAQSB from './pages/FAQSB';
import FAQTP from './pages/FAQTP';
import FAQWC from './pages/FAQWC';
import FAQCG from './pages/FAQCG';
import EmailPopup from './pages/EmailPopup';
import CalendlyButton from './Components/CalendlyButton'; // Import the CalendlyButton component

const App = () => {
  return (
    <HelmetProvider>
      <EmailPopup />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:productUrl" element={<ProductDetail />} />
          <Route path="/products" element={<Product />} />
          <Route path="/custom-product" element={<CustomProduct />} />
          <Route path="/faq/dock-bumpers" element={<FAQDB />} />
          <Route path="/faq/cable-protectors" element={<FAQCP />} />
          <Route path="/faq/dock-fenders" element={<FAQDF />} />
          <Route path="/faq/hose-ramps" element={<FAQHR />} />
          <Route path="/faq/rubber-stoppers" element={<FAQRS />} />
          <Route path="/faq/speed-breakers" element={<FAQSB />} />
          <Route path="/faq/tipper-pads" element={<FAQTP />} />
          <Route path="/faq/wheel-chokers" element={<FAQWC />} />
          <Route path="/faq/corner-guards" element={<FAQCG />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-All Route for Undefined Pages */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* The CalendlyButton will appear across all pages */}
        <CalendlyButton />
      </Router>
    </HelmetProvider>
  );
};

export default App;
