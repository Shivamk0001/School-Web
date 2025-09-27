import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AcademicsBanner from '../components/AcademicsPageSections/AcademicsBanner';
import ProgramsSection from '../components/AcademicsPageSections/ProgramsSection';
import HighSchoolsSection from '../components/AcademicsPageSections/HighSchoolsSection';
import CTASection from '../components/AcademicsPageSections/CTASection';

function OurAcademicsPage() {
  return (
    <>
      <Header />
      <AcademicsBanner />
      <ProgramsSection />
      <HighSchoolsSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default OurAcademicsPage;