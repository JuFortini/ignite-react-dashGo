import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w="100%" maxWidth={1480} mx="auto" px="6" my="6">
                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading> 

                    <Divider my="8" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid w="100%" spacing={["6", "8"]} minChildWidth="240px">
                            <Input name="name" label="Nome completo"/>
                            <Input name="email" type="email" label="E-mail"/>       
                        </SimpleGrid>
                        <SimpleGrid w="100%" spacing={["6", "8"]} minChildWidth="240px">
                            <Input name="password" type="password" label="Senha"/>
                            <Input name="password_confirmation" type="password" label="Confirmação da senha"/> 
                        </SimpleGrid>
                    </VStack>  

                    <Flex justify="flex-end" mt="8">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button
                                as="a"
                                leftIcon={<Icon as={RiCloseLine} fontSize="20" />}
                                size="sm"
                                fontSize="sm"
                                colorScheme="whiteAlpha"
                                >
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                              as="a"
                              leftIcon={<Icon as={RiCheckLine} fontSize="20" />}
                              size="sm"
                              fontSize="sm"
                              colorScheme="pink"
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>

            </Flex>
        </Box>
    );
}