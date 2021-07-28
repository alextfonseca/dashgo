import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Alex Teixeira da Fonseca</Text>

          <Text color="gray.300" fontSize="small">
            alexatf2014@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Alex Teixeira da Fonseca"
        src="https://github.com/alextfonseca.png"
      />
    </Flex>
  );
};
