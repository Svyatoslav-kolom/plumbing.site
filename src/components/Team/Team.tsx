import { Box, Flex, Heading } from "@chakra-ui/react";
import { teamMembers } from "./teamMembers";
import { TeamCard } from "../TeamCard";

export const Team = () => (
  <Box
    height={{ base: "auto", md: "100vh", xl: "740px" }}
    p={6}
  >
    <Heading
      textStyle={"pageTitle"}
      mb={6}
      maxW={"800px"}
      ml={{ base: "auto", md: "100px" }}
    >
      Наши мастера
    </Heading>

    <Flex
      flexWrap="wrap"
      justify="center"
      gap={{ base: "20px", md: "60px" }}
      mx="auto"
      align="flex-start"
    >
      {teamMembers.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </Flex>
  </Box>
);
