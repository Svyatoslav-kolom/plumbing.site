import { Box } from '@chakra-ui/react'
import './App.css'
import { Head } from './components/Head'
import Header from './components/Header/Header'
import BgImage from "./assets/Backgrounds/BackgroundHead.png";
import { TypesOfRepairs } from './components/TypesOfRepairs';
import { StagesOfWork } from './components/StagesOfWork';
import { RegisterSection } from './components/RegisterSection';
import { DoneRepairs } from './components/DoneRepairs';
import { Team } from './components/Team';
import CalculatorSection from './components/CalculatorSection/CalculatorSection';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicyModal';
import { TermsOfService } from './components/TermsOfServiceModal';
import { useState } from 'react';
import { FadeWrapper } from './components/FadeWrapper';
import { RegisterBlock } from './components/RegisterBlock';
import { Contacts } from './components/Contacts';
import { MobileHeader } from './components/MobileHeader';
import { MobileHeaderMenu } from './components/MobileHeaderMenu';

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClosePrivacy = () => setIsPrivacyOpen(false);
  const onCloseTerms = () => setIsTermsOpen(false);
  const onCloseRegister = () => setIsRegisterOpen(false);
  const onCloseContacts = () => setIsContactsOpen(false);
  const onCloseMenu = () => setIsMenuOpen(false);

  return (
    <Box zoom={0.9}>
      <Box display={{ base: "none", md: "block" }}>
        <Header
          onOpenRegister={setIsRegisterOpen}
          onOpenContacts={setIsContactsOpen}
        />
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <MobileHeader
          onOpenContacts={setIsContactsOpen}
          onOpenRegister={setIsRegisterOpen}
          onOpenMenu={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </Box>

      {isRegisterOpen && (
        <FadeWrapper>
          <RegisterBlock onClose={onCloseRegister} />
        </FadeWrapper>
      )}

      {isMenuOpen && (
        <MobileHeaderMenu onCloseMenu={onCloseMenu}/>
      )}

      {isContactsOpen && (
        <FadeWrapper>
          <Contacts onClose={onCloseContacts} />
        </FadeWrapper>
      )}

      <Box
        pt={{base: "30px", md:"100px"}}
        bgImage={`url(${BgImage})`}
        bgSize="cover"
      >
        <Head />
      </Box>

      <TypesOfRepairs />

      <Box mx={"100px"} id="workflow" >
        <StagesOfWork />
      </Box>

      <Box
        pl="200px"
        pr="100px"
        mt="160px"
        style={{
          backgroundImage: 'linear-gradient(to right, #6AB4E5 0%, #4582AA 100%)'
        }}
      >
        <RegisterSection />
      </Box>

      <Box mx={"100px"} id="portfolio">
        <DoneRepairs />
      </Box>

      <Team />

      <Box mx={"100px"} mt={"150px"} id='calculator'>
        <CalculatorSection />
      </Box>

      <Box mt={"150px"}>
        <Footer setIsPrivacyOpen={setIsPrivacyOpen} setIsTermsOpen={setIsTermsOpen} />
      </Box>

      {
        isPrivacyOpen && (
          <FadeWrapper>
            <PrivacyPolicy onClose={onClosePrivacy} />
          </FadeWrapper>
        )
      }

      {
        isTermsOpen && (
          <FadeWrapper>
            <TermsOfService onClose={onCloseTerms} />
          </FadeWrapper>
        )
      }
    </Box>
  )
}

export default App
