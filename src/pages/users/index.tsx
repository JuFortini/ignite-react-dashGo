import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Text, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

    const isLargeWindow = useBreakpointValue({
        base: false,
        large: true,
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" maxWidth={1480} mx="auto" px="6" my="6">

                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p="8">

                    <Flex justify="space-between" align="center">
                        <Heading fontWeight="normal" size="lg">Usuários</Heading>
                        <Link href="/users/create" passHref>
                            <Button
                              as="a"
                              leftIcon={<Icon as={RiAddLine} fontSize={["16", "20"]} />}
                              size="sm"
                              fontSize={["xs", "sm"]}
                              colorScheme="pink"
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha" my="10">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>USUÁRIO</Th>
                                {isLargeWindow && <Th>DATA DE CADASTRO</Th>}
                                {isLargeWindow && <Th></Th>}
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="medium">Jucimara Fortini</Text>
                                        <Text fontSize="sm" color="gray.300">jucimaraafortini@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isLargeWindow && <Td>23 de Abril, 2022</Td>}
                                {isLargeWindow && 
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
                                    </Td>}
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="medium">Jucimara Fortini</Text>
                                        <Text fontSize="sm" color="gray.300">jucimaraafortini@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isLargeWindow && <Td>23 de Abril, 2022</Td>}
                                {isLargeWindow && 
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
                                    </Td>}
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="medium">Jucimara Fortini</Text>
                                        <Text fontSize="sm" color="gray.300">jucimaraafortini@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isLargeWindow && <Td>23 de Abril, 2022</Td>}
                                {isLargeWindow && 
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
                                    </Td>}
                            </Tr>
                        </Tbody>

                    </Table>

                    <Pagination />

                </Box>

            </Flex>

        </Box>
    );
}