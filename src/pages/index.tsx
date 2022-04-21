import { Button, Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        w="100%"
        maxWidth={360}
        bg="gray.700"
        p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email" >E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              bg="gray.900"
              type="email"
              size="lg"
              variant="filled"
              focusBorderColor="pink.700"
              _hover={{
                bg:"gray.900"
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              bg="gray.900"
              type="password"
              size="lg"
              variant="filled"
              focusBorderColor="pink.700"
              _hover={{
                bg:"gray.900"
              }}
            />
          </FormControl>
        </Stack>
        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
