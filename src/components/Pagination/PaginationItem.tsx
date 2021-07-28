import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  numberPage: string;
}

export const PaginationItem = ({
  isCurrent = false,
  numberPage,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {numberPage}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
    >
      {numberPage}
    </Button>
  );
};
