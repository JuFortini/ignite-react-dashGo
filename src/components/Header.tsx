import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiSearch2Line, RiUserAddLine } from 'react-icons/ri';

export function Header() {
    return (
        <Flex
          as="header"
          w="100%"
          h="20"
          maxWidth={1480}
          px="6"
          mx="auto"
          mt="4"
          align="center"
        >
            <Text
              fontSize="3xl"
              fontWeight="bold"
              letterSpacing="tight"
              w="64"
            >
                dashgo
                <Text as="span" color="pink.500" ml="1">.</Text>
            </Text>

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

            <Flex
              align="center"
              ml="auto"
            >
                <HStack
                  spacing="8"
                  mx="8"
                  pr="8"
                  py="1"
                  color="gray.300"
                  borderRightWidth={1}
                  borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>

                <Flex align="center">
                    <Box textAlign="right" mr="4">
                        <Text>Jucimara Fortini</Text>
                        <Text color="gray.300" fontSize="small">jucimaraafortini@gmail.com</Text>
                    </Box>
                    <Avatar size="md" name="Jucimara Fortini" src="https://github.com/JuFortini.png" />
                </Flex>

            </Flex>

        </Flex>
    )
}