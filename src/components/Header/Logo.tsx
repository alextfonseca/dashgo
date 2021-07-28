import { Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
    >
      dashgo
      <Text as="span" marginLeft="1" color="pink.500">
        .
      </Text>
    </Text>
  );
};
