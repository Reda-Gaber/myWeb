import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import Article1 from './articles/Article1';
import Article2 from './articles/Article2';
import Article3 from './articles/Article3';
import Article4 from './articles/Article4';
import Article5 from './articles/Article5';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/articles/1" element={<Article1 />} />
        <Route path="/articles/2" element={<Article2 />} />
        <Route path="/articles/3" element={<Article3 />} />
        <Route path="/articles/4" element={<Article4 />} />
        <Route path="/articles/5" element={<Article5 />} />
      </Routes>
    </Layout>
  );
}

export default App;