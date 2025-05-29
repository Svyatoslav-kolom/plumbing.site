import {
  Box,
  Heading,
  Text,
  CloseButton,
  Flex,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
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
        Polityka Prywatności
      </Heading>

      {[
        {
          title: '1. Informacje Ogólne',
          content: `Niniejsza polityka prywatności określa zasady przetwarzania danych osobowych przez firmę Y.B.O. Group Yurii Kryvoruchko, z siedzibą w 30-658 Kraków, ul. Łużycka 42/24, NIP: 6793297267.`
        },
        {
          title: '2. Administrator Danych',
          content: `Administratorem danych osobowych jest Y.B.O. Group Yurii Kryvoruchko, dostępna pod adresem www.remontykrakowa.pl. Można się skontaktować poprzez e-mail: kontakt@remontykrakowa.pl lub telefonicznie: +48883465816.`
        },
        {
          title: '3. Zakres Przetwarzanych Danych',
          content: `Firma gromadzi i przetwarza dane osobowe użytkowników, w tym:\n- Imię i nazwisko, adres e-mail, numer telefonu\n- Adres zamieszkania i inne dane kontaktowe\n- Informacje techniczne, takie jak adres IP, pliki cookies`
        },
        {
          title: '4. Cel Przetwarzania Danych',
          content: `Dane osobowe są przetwarzane w następujących celach:\n- Realizacja zamówień i świadczenie usług\n- Kontakt z klientem\n- Obsługa reklamacji i zapytań\n- Spełnianie obowiązków prawnych (np. księgowość)`
        },
        {
          title: '5. Udostępnianie Danych',
          content: `Firma Y.B.O. Group nie sprzedaje ani nie udostępnia danych osobowych osobom trzecim bez zgody użytkownika, chyba że wymaga tego prawo.`
        },
        {
          title: '6. Prawa Użytkownika',
          content: `Osoby, których dane dotyczą, mają prawo do:\n- Dostępu do swoich danych\n- Poprawienia lub usunięcia danych\n- Ograniczenia przetwarzania\n- Zgłoszenia sprzeciwu wobec przetwarzania`
        },
        {
          title: '7. Pliki Cookies',
          content: `Strona www.remontykrakowa.pl wykorzystuje pliki cookies do optymalizacji działania oraz analizy ruchu na stronie.`
        },
        {
          title: '8. Zmiany Polityki Prywatności',
          content: `Firma Y.B.O. Group Yurii Kryvoruchko zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. Aktualizacje będą publikowane na stronie internetowej.`
        }
      ].map((section, index) => (
        <Box key={index} mb={6}>
          <Heading size="md" mb={2} color="teal">
            {section.title}
          </Heading>
          <Text whiteSpace="pre-line">{section.content}</Text>

          {index < 7 && (
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
