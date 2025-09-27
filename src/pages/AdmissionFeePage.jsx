import React from 'react';

import AdmissionBanner from '../components/AdmissionPageSections/AdmissionBanner';
import AdmissionFlowchart from '../components/AdmissionPageSections/AdmissionFlowchart';
import AdmissionDetails from '../components/AdmissionPageSections/AdmissionDetails';
import AdmissionCTA from '../components/AdmissionPageSections/AdmissionCTA';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function AdmissionFeePage() {
  return (
    <>
      <Header />
      <AdmissionBanner />
      <AdmissionFlowchart />
      <AdmissionDetails />
      <AdmissionCTA />
      <Footer />
    </>
  );
}

export default AdmissionFeePage;
