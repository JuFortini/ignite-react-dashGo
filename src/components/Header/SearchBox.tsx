import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

export function SearchBox() {
    return (
        <Flex
            as="label"
            flex="1"
            px="8"
            py="4"
            ml="6"
            bg="gray.800"
            color="gray.200"
            maxWidth={480}
            borderRadius="full"
            position="relative"
            alignSelf="center"
        >
            <Input
                variant="unstyled"
                px="4"
                mr="4"
                placeholder="Buscar na plataforma"
                _placeholder={{ color: "gray.400" }}
            />
            <Icon as={RiSearch2Line} fontSize="20" />

        </Flex>
    );
}