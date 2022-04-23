import { Box, Button, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
        <HStack align="center" justify="space-between">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>50</strong>
            </Box>
            <HStack>
                <PaginationItem isCurrent number={1}/>
                <PaginationItem number={2}/>
                <PaginationItem number={3}/>
                <PaginationItem number={4}/>
                <PaginationItem number={5}/>
            </HStack>
        </HStack>
    );
}