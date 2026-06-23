/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import CategoryProductPage from './pages/CategoryProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ClientsPage from './pages/ClientsPage';
import RentalsPage from './pages/RentalsPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-gray-900 bg-gray-50 flex flex-col selection:bg-green-100 selection:text-green-900 overflow-x-hidden">
        <Header />
        <main className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/produtos" element={<ProductsPage />} />
              <Route path="/produtos/:slug" element={<CategoryProductPage />} />
              <Route path="/produtos/:categorySlug/:itemSlug" element={<ProductDetailPage />} />
              <Route path="/clientes" element={<ClientsPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/locacao" element={<RentalsPage />} />
            </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
