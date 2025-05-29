import { Box, Flex, Heading } from "@chakra-ui/react";
import { teamMembers } from "./teamMembers";
import { TeamCard } from "../TeamCard";

export const Team = () => (
  <Box
    height="120vh"
    p={6}
    bg="background.main"
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
    <Heading
      textStyle={"pageTitle"}
      mb={6}
      maxW={"800px"}
      ml={"100px"}
    >
      Наши мастера
    </Heading>

    <Flex
      flexWrap="wrap"
      justify="center"
      gap="60px"
      mx="auto"
      align="flex-start"
    >
      {teamMembers.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </Flex>
  </Box>
);
