import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import './App.css';

import BgImage from './assets/Backgrounds/BackgroundHead.png';

// Components
import { Head } from './components/Head';
import Header from './components/Header/Header';
import { MobileHeader } from './components/MobileHeader';
import { MobileHeaderMenu } from './components/MobileHeaderMenu';
import { FadeWrapper } from './components/FadeWrapper';
import { RegisterBlock } from './components/RegisterBlock';
import { Contacts } from './components/Contacts';
import { TypesOfRepairs } from './components/TypesOfRepairs';
import { StagesOfWork } from './components/StagesOfWork';
import { RegisterSection } from './components/RegisterSection';
import { DoneRepairs } from './components/DoneRepairs';
import { Team } from './components/Team';
import CalculatorSection from './components/CalculatorSection/CalculatorSection';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicyModal';
import { TermsOfService } from './components/TermsOfServiceModal';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Toaster } from './components/ui/toaster';

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box>
      {/* Desktop Header */}
      <Box display={{ base: 'none', md: 'block' }}>
        <Header
          onOpenRegister={setIsRegisterOpen}
          onOpenContacts={setIsContactsOpen}
        />
      </Box>

      {/* Mobile Header */}
      <Box display={{ base: 'block', md: 'none' }}>
        <MobileHeader
          onOpenContacts={setIsContactsOpen}
          onOpenRegister={setIsRegisterOpen}
          onOpenMenu={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </Box>

      {/* Modals and Overlays */}
      {isRegisterOpen && (
        <FadeWrapper onClose={() => setIsRegisterOpen(false)}>
          <RegisterBlock onClose={() => setIsRegisterOpen(false)} />
        </FadeWrapper>
      )}

      {isContactsOpen && (
        <FadeWrapper onClose={() => setIsContactsOpen(false)}>
          <Contacts onClose={() => setIsContactsOpen(false)} />
        </FadeWrapper>
      )}

      {isMenuOpen && <MobileHeaderMenu onCloseMenu={() => setIsMenuOpen(false)} />}

      {/* Main Sections */}
      <Box pt={{ base: '30px', md: '100px' }} bgImage={`url(${BgImage})`} bgSize="cover">
        <Head />
      </Box>

      <Box mx={{ base: '30px', md: 0 }} id="services" mt={{ base: '30px', md: '60px' }}>
        <TypesOfRepairs />
      </Box>

      <Box mx={{ base: '30px', md: '100px' }} id="workflow" mt={{ base: '30px', md: '60px' }}>
        <StagesOfWork />
      </Box>

      <Box
        pl={{ base: "30px", md: "70px", xl: "200px" }}
        pr={{ base: "30px", md: "70px", xl: "100px" }}
        mt={{ base: "30px", md: "100px", xl: "160px" }}
        style={{
          backgroundImage: 'linear-gradient(to right, #6AB4E5 0%, #4582AA 100%)'
        }}
      >
        <RegisterSection onOpenRegister={setIsRegisterOpen} />
      </Box>

      <Box mx={{ base: 0, md: '100px' }} id="portfolio">
        <DoneRepairs />
      </Box>

      <Box
        px={{ base: "30px", md: "0" }}
        style={{
          backgroundImage: `linear-gradient(
              to bottom,
              rgba(211, 226, 228, 0) 0%,
              rgba(211, 226, 228, 1) 20%,
              rgba(211, 226, 228, 0.46) 80%,
              rgba(211, 226, 228, 0) 100%
            )`,
        }}
        id="masters"
      >
        <Team />
      </Box>

      <Box mx={{ base: 0, md: '100px' }} mt={{ base: '30px', xl: '150px' }} id="calculator">
        <CalculatorSection />
      </Box>

      <Box mt="150px">
        <Footer setIsPrivacyOpen={setIsPrivacyOpen} setIsTermsOpen={setIsTermsOpen} />
      </Box>

      {/* Modals */}
      {isPrivacyOpen && (
        <FadeWrapper onClose={() => setIsPrivacyOpen(false)}>
          <PrivacyPolicy onClose={() => setIsPrivacyOpen(false)} />
        </FadeWrapper>
      )}

      {isTermsOpen && (
        <FadeWrapper onClose={() => setIsTermsOpen(false)}>
          <TermsOfService onClose={() => setIsTermsOpen(false)} />
        </FadeWrapper>
      )}

      <ScrollToTopButton />
      <Toaster />
    </Box>
  );
}

export default App;
