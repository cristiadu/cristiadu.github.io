import React from 'react';
import HeaderNavBar from './components/layout/HeaderNavBar';
import Footer from './components/layout/Footer';
import MainContent from './components/layout/MainContent';

const PortfolioApp = () => {
  return (
    <>
      <HeaderNavBar />
      <MainContent />
      <Footer />
    </>
  );
};

export default PortfolioApp;