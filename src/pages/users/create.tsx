import Link from "next/link";
import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Mutation, useMutation } from "react-query";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória").min(6, "Mínimo de 6 caracteres"),
    password_confirmation: yup.string().oneOf([
        yup.ref("password")
    ], "Senhas precisam ser iguais")
})

export default function CreateUser() {
    const router = useRouter();

    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post("users", {
            user: {
                ... user,
                created_at: new Date(),
            }
        })
        return response.data.user;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        }
    });

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema),
    });

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await createUser.mutateAsync(values);

        router.push("/users");
    }

    const { errors } = formState;

    return (
        <Box>
            <Header />

            <Flex w="100%" maxWidth={1480} mx="auto" px="6" my="6">
                <Sidebar />

                <Box
                  as="form"
                  flex="1"
                  bg="gray.800"
                  borderRadius={8}
                  p={["6", "8"]}
                  onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading> 

                    <Divider my="8" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid w="100%" spacing={["6", "8"]} minChildWidth="240px">
                            <Input
                              name="name"
                              label="Nome completo" 
                              {...register("name")}
                              error={errors.name}
                            />
                            <Input
                              name="email"
                              type="email"
                              label="E-mail" 
                              {...register("email")}
                              error={errors.email}
                            />      
                        </SimpleGrid>
                        <SimpleGrid w="100%" spacing={["6", "8"]} minChildWidth="240px">
                            <Input
                              name="password"
                              type="password"
                              label="Senha"
                              {...register("password")}
                              error={errors.password} 
                            />
                            <Input
                              name="password_confirmation"
                              type="password"
                              label="Confirmação da senha" 
                              {...register("password_confirmation")}
                              error={errors.password_confirmation}
                            /> 
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
                              type="submit"
                              leftIcon={<Icon as={RiCheckLine} fontSize="20" />}
                              size="sm"
                              fontSize="sm"
                              colorScheme="pink"
                              isLoading={formState.isSubmitting}
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