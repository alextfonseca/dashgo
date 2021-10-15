import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  numberPage: number;
  onPageChange: (page: number) => void;
}

export const PaginationItem = ({
  isCurrent = false,
  numberPage,
  onPageChange,
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
      onClick={() => onPageChange(numberPage)}
    >
      {numberPage}
    </Button>
  );
};
