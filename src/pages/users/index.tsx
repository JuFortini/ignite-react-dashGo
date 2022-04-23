import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Text, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" maxWidth={1480} mx="auto" px="6" my="6">

                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p="8">

                    <Flex justify="space-between" align="center">
                        <Heading fontWeight="normal" size="lg">Usuários</Heading>
                        <Button
                        as="a"
                        leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        size="sm"
                        fontSize="sm"
                        colorScheme="pink"
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha" my="10">
                        <Thead>
                            <Tr>
                                <Th><Checkbox colorScheme="pink"/></Th>
                                <Th>USUÁRIO</Th>
                                <Th>DATA DE CADASTRO</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td><Checkbox colorScheme="pink" /></Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="medium">Jucimara Fortini</Text>
                                        <Text fontSize="sm" color="gray.300">jucimaraafortini@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>23 de Abril, 2022</Td>
                                <Td>
                                    <Button
                                    as="a"
                                    leftIcon={<Icon as={RiPencilLine} />}
                                    size="xs"
                                    fontSize="xs"
                                    colorScheme="whiteAlpha"
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><Checkbox colorScheme="pink" /></Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="medium">Jucimara Fortini</Text>
                                        <Text fontSize="sm" color="gray.300">jucimaraafortini@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>23 de Abril, 2022</Td>
                                <Td>
                                    <Button
                                    as="a"
                                    leftIcon={<Icon as={RiPencilLine} />}
                                    size="xs"
                                    fontSize="xs"
                                    colorScheme="whiteAlpha"
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><Checkbox colorScheme="pink" /></Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="medium">Jucimara Fortini</Text>
                                        <Text fontSize="sm" color="gray.300">jucimaraafortini@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>23 de Abril, 2022</Td>
                                <Td>
                                    <Button
                                    as="a"
                                    leftIcon={<Icon as={RiPencilLine} />}
                                    size="xs"
                                    fontSize="xs"
                                    colorScheme="whiteAlpha"
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>

                    </Table>

                    <Pagination />

                </Box>

            </Flex>

        </Box>
    );
}