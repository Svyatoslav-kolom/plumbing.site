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

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  const onClosePrivacy = () => setIsPrivacyOpen(false);
  const onCloseTerms = () => setIsTermsOpen(false);
  const onCloseRegister = () => setIsRegisterOpen(false);
  const onCloseContacts = () => setIsContactsOpen(false);

  return (
    <>
      <Header onOpenRegister={setIsRegisterOpen} onOpenContacts={setIsContactsOpen}/>

      {isRegisterOpen && (
        <FadeWrapper>
          <RegisterBlock onClose={onCloseRegister} />
        </FadeWrapper>
      )}

      {isContactsOpen && (
        <FadeWrapper>
          <Contacts onClose={onCloseContacts} />
        </FadeWrapper>
      )}

      <Box
        pt={"100px"}
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
    </>
  )
}

export default App
