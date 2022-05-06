import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number,
    registersPerPage: number,
    currentPage: number,
    onPageChange: (page: number) => void;
}

function generatePagesArray( from: number, to: number ) {
    return [... new Array(to - from)].map((_, index) => {
        return (from + index + 1);
    }) 
}

export function Pagination({
    totalCountOfRegisters,
    registersPerPage,
    currentPage,
    onPageChange,
}: PaginationProps) {

    const siblingsPage = 1;

    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsPage, currentPage - 1)
        : [];
    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsPage, lastPage))
        : [];

    return (
        <Stack direction={["column", "row"]} align="center" justify="space-between">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>50</strong>
            </Box>
            <HStack>

                { currentPage > siblingsPage + 1 && (
                    <>
                        <PaginationItem number={1} onPageChange={onPageChange} />
                        { currentPage > siblingsPage + 2 && (
                            <Text color="gray.600" px="1" pt="2">...</Text>
                        )}
                    </>
                )}

                { previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
                })}
                
                <PaginationItem isCurrent number={currentPage} onPageChange={onPageChange} />

                { nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
                })}

                {currentPage < lastPage - siblingsPage && (
                    <>
                        { currentPage < lastPage - siblingsPage - 1 && (
                            <Text color="gray.600" px="1" pt="2">...</Text>
                        )}
                        <PaginationItem number={lastPage} onPageChange={onPageChange} />
                    </>
                )}

            </HStack>
        </Stack>
    );
}