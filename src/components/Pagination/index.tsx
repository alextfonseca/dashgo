import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingCount = 1; //quantas paginas anteriores e proximas vão ser mostradas 1 ...4 5 6 ... 20

// função para gerar as paginas 2 - 3 4 5 - 6
function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export const Pagination = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) => {
  // ultima pagina possivel
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage); //numero da ultima página

  // de qual pagina ate qual pagina vai ser gerada
  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingCount, lastPage),
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {/* mostrando a primeira pagina */}
        {currentPage > 1 + siblingCount && (
          <>
            <PaginationItem onPageChange={onPageChange} numberPage={1} />
            {currentPage > 2 + siblingCount && (
              <Text color="gray.300" width="8" align="center">
                ...
              </Text>
            )}
          </>
        )}

        {/* pagina anterior */}
        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                numberPage={page}
              />
            );
          })}

        <PaginationItem
          onPageChange={onPageChange}
          numberPage={currentPage}
          isCurrent
        />

        {/* proxima pagina */}
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                numberPage={page}
              />
            );
          })}

        {/* ultima pagina */}
        {currentPage + siblingCount < lastPage && (
          <>
            {currentPage + 1 + siblingCount < lastPage && (
              <Text color="gray.300" width="8" align="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} numberPage={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
};
