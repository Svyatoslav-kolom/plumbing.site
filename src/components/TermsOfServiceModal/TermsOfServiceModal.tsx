import {
  Box,
  Heading,
  Text,
  CloseButton,
  Flex,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

interface TermsOfServiceProps {
  onClose: () => void;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onClose }) => {
  return (
    <Box
      px={6}
      py={6}
      bg="white"
      maxW="900px"
      mx="auto"
      mt={10}
      borderRadius="20px"
      boxShadow="xl"
      maxH="90vh"
      overflowY="auto"
      border="1px solid #E2E8F0"
      animation={`${fadeIn} 0.3s ease-out`}
      css={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#CBD5E0 transparent',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#CBD5E0',
          borderRadius: '8px',
        },
      }}
    >
      <Flex justify="flex-end" mb={2}>
        <CloseButton onClick={onClose} />
      </Flex>

      <Heading size="lg" mb={6} textAlign="center">
        Regulamin świadczenia usług drogą elektroniczną firmy Y.B.O. Group
      </Heading>

      {[
        {
          title: '1. Postanowienia Ogólne',
          content: `Zarząd Y.B.O. Group Yurii Kryvoruchko, z siedzibą w Krakowie (NIP: 6793297267), ustanawia niniejszy regulamin świadczenia usług drogą elektroniczną zgodnie z ustawą z dnia 18 lipca 2002 roku.`,
        },
        {
          title: '2. Zakres Regulaminu',
          content: `Regulamin dotyczy usług świadczonych za pośrednictwem stron internetowych Y.B.O. Group, w tym remontykrakowa.pl oraz jej podstron.`,
        },
        {
          title: '3. Korzystanie z Usług',
          content: `Każdy użytkownik zobowiązuje się do przestrzegania niniejszego regulaminu od momentu rozpoczęcia korzystania z serwisu. Brak akceptacji oznacza konieczność opuszczenia strony.`,
        },
        {
          title: '4. Czas Świadczenia Usług',
          content: `Korzystanie z usług rozpoczyna się w momencie logowania i trwa do zakończenia odbierania danych, z wyjątkiem usług kontaktowych.`,
        },
        {
          title: '5. Prawo do Zakończenia Korzystania',
          content: `Użytkownik może w każdej chwili zakończyć korzystanie z usługi.`,
        },
        {
          title: '6. Zakres Usług',
          content: `Y.B.O. Group świadczy usługi elektroniczne, takie jak informacje o działalności, formularze kontaktowe oraz udostępnianie danych rejestrowych.`,
        },
        {
          title: '7. Wymagania Techniczne',
          content: `Do korzystania z usług wymagane jest urządzenie z dostępem do internetu i przeglądarka internetowa.`,
        },
        {
          title: '8. Reklamacje',
          content: `Reklamacje należy składać pisemnie lub elektronicznie pod adres podany w zakładce Kontakt.`,
        },
        {
          title: '9. Ochrona Danych Osobowych',
          content: `Dane osobowe są przetwarzane zgodnie z Polityką Prywatności, a użytkownik ma prawo do ich wglądu, poprawiania i usunięcia.`,
        },
      ].map((section, index) => (
        <Box key={index} mb={6}>
          <Heading size="md" mb={2} color="teal">
            {section.title}
          </Heading>
          <Text whiteSpace="pre-line">{section.content}</Text>

          {index < 8 && (
            <Box
              mt={5}
              mb={2}
              height="1px"
              bg="#E2E8F0"
              width="100%"
              borderRadius="full"
            />
          )}
        </Box>
      ))}
    </Box>
  );
};
