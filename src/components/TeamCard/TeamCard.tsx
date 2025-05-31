import { useState } from 'react';
import defaultImage from '../../assets/images/CompletedRepairs/Default.png';
import {
  Box,
  Text,
  Image,
  VStack,
  Stack,
} from '@chakra-ui/react';
import type { TeamMember } from '../Team/teamMembers';
import { ButtonStandart } from '../ButtonStandart';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack
      bg="white"
      maxW={{ base: "100%", md: "40%", xl: "240px" }}
      w="100%"
      borderRadius="20px"
      textAlign="center"
      transition="all 0.3s ease"
      pb={"20px"}
      minH={{ base: "auto", md: "250px", xl: "530px" }}
      direction="column"
    >
      <Box
        borderRadius="20px"
        overflow="hidden"
        w="100%"
        h={{ base: "170px", md: "280px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          w="100%"
          h="100%"
          src={member.avatarUrl}
          alt={member.name}
          onError={(e) => (e.currentTarget.src = defaultImage)}
          objectPosition="top"
        />
      </Box>

      <VStack
        height={"100%"}
        align="start"
        w="100%"
        textAlign="left"
        gap={4}
        px={"20px"}
        pt={"10px"}
      >
        <VStack align="start" gap={1} w="100%">
          <Text textStyle="blockTitle" color="accent.main">
            {member.name}
          </Text>

          <Text textStyle="text" color="text.grayDark">
            {member.position}
          </Text>
        </VStack>

        <Box
          w="100%"
          overflow="hidden"
          maxH={expanded ? '500px' : '0px'}
          opacity={expanded ? 1 : 0}
          transition="max-height 0.4s ease, opacity 0.4s ease"
        >
          <VStack align="start" textStyle="text" color="text.grayDark" gap={2}>
            {member.description?.map((point, idx) => (
              <Text key={idx} display="flex" alignItems="start">
                <Text as="span" mr={2} color="accent.main">•</Text>
                {point}
              </Text>
            ))}
          </VStack>
        </Box>
      </VStack>

      <Box height={"43px"} w={"133px"} mt={"auto"} alignSelf={"center"}>
        <ButtonStandart
          text={expanded ? "Krótko" : "Szczegółowo"}
          onClick={() => setExpanded(!expanded)}
        />
      </Box>

    </Stack>
  );
};
