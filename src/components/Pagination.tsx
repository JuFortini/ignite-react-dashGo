import { Box, Button, HStack } from "@chakra-ui/react";

export function Pagination() {
    return (
        <HStack align="center" justify="space-between">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>50</strong>
            </Box>
            <HStack>
                <Button
                  size="sm"
                  fontSize="xs"
                  colorScheme="pink"
                  disabled
                  _disabled={{
                      bg:"pink.500",
                      cursor: "default"
                  }}
                >
                    1
                </Button>
                <Button
                  size="sm"
                  fontSize="xs"
                  bg="gray.700"
                  _hover={{
                      bg: "gray.500"
                  }}
                >
                    2
                </Button>
                <Button
                  size="sm"
                  fontSize="xs"
                  bg="gray.700"
                  _hover={{
                      bg: "gray.500"
                  }}
                >
                    3
                </Button>
                <Button
                  size="sm"
                  fontSize="xs"
                  bg="gray.700"
                  _hover={{
                      bg: "gray.500"
                  }}
                >
                    4
                </Button>
                <Button
                  size="sm"
                  fontSize="xs"
                  bg="gray.700"
                  _hover={{
                      bg: "gray.500"
                  }}
                >
                    5
                </Button>
            </HStack>
        </HStack>
    );
}