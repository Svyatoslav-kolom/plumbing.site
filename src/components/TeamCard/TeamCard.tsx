import { useState } from 'react';
import defaultImage from '../../assets/images/CompletedRepairs/Default.png';
import {
  Box,
  Text,
  Image,
  VStack,
  Button,
} from '@chakra-ui/react';
import type { TeamMember } from '../Team/teamMembers';
import arrowRight from '../../assets/icons/ArrowRight.svg';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      bg="white"
      maxW="240px"
      w="100%"
      borderRadius="20px"
      textAlign="center"
      transition="all 0.3s ease"
      pb={"20px"}
      minH="500px"
    >
      <VStack gap={3} h="100%">
        <Image
          w="100%"
          h="280px"
          borderRadius="20px"
          src={member.avatarUrl}
          alt={member.name}
          objectFit="cover"
          onError={(e) => (e.currentTarget.src = defaultImage)}
          transition="all 0.3s ease"
        />

        <VStack
          mx="30px"
          align="start"
          w="100%"
          textAlign="left"
          gap={4}
          px={"30px"}
        >
          <VStack align="start" gap={1} w="100%">
            <Text textStyle="blockTitle" color="accent.main">
              {member.name}
            </Text>

            <Text textStyle="text" color="text.grayDark">
              {member.position}
            </Text>
          </VStack>

          {/* Плавне зʼявлення тексту */}
          <Box
            w="100%"
            overflow="hidden"
            maxH={expanded ? '500px' : '0px'}
            opacity={expanded ? 1 : 0}
            transition="max-height 0.4s ease, opacity 0.4s ease"
          >
            <VStack align="start" textStyle="text" color="text.grayDark">
              {member.description?.map((point, idx) => (
                <Text key={idx}>
                  <Text as="span" mr={1} color="accent.main">
                    •
                  </Text>
                  {point}
                </Text>
              ))}
            </VStack>
          </Box>

          <Button
            onClick={() => setExpanded(!expanded)}
            size="sm"
            variant="ghost"
            color="accent.main"
            alignSelf="center"
          >
            <Image
              src={arrowRight}
              alt="Toggle details"
              boxSize="25px"
              transition="transform 0.3s ease"
              transform={expanded ? 'rotate(270deg)' : 'rotate(90deg)'}
            />
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};
