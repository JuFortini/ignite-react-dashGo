import { useState } from "react";
import Link from "next/link";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Text, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isFetching, error } = useUsers(currentPage);

    const isLargeWindow = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />

            <Flex w="100%" maxWidth={1480} mx="auto" px="6" my="6">

                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p="8">

                    <Flex justify="space-between" align="center">
                        <Heading fontWeight="normal" size="lg">
                            Usuários

                            { !isLoading && isFetching &&
                                <Spinner ml="6" size="sm" color="gray.500" />
                            }
                        </Heading>
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

                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.400"
                            color="pink.500"
                            size="xl" 
                            />
                        </Flex>
                        ) : error ? (
                            <Flex justify="center">
                                <Text color="pink.400" fontSize="lg">Falha ao carregar a lista de usuários</Text>
                            </Flex>
                        ) : (
                            <>
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
                                        {data.users.map(user => {
                                            return (
                                                <Tr key={user.id}>
                                                    <Td px={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>
                                                    <Td>
                                                        <Box>
                                                            <Text fontWeight="medium">{user.name}</Text>
                                                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                    {isLargeWindow && <Td>{user.createdAt}</Td>}
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
                                            )
                                        })}
                                    </Tbody>

                                </Table>

                                <Pagination
                                  registersPerPage={10}
                                  totalCountOfRegisters={data.totalCount}
                                  currentPage={currentPage}
                                  onPageChange={setCurrentPage}
                                />
                            </>
                        )
                    }

                </Box>

            </Flex>

        </Box>
    );
}