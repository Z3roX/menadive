import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DiveSitesPage from './pages/DiveSitesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/divesites" element={<DiveSitesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Add more routes as needed */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
