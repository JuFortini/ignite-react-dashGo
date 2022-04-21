import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string,
    label: string,
}

export default function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            <FormLabel htmlFor={name} >{label}</FormLabel>
            <ChakraInput
              name={name}
              id={name}
              bg="gray.900"
              type="email"
              size="lg"
              variant="filled"
              focusBorderColor="pink.700"
              _hover={{
                bg:"gray.900"
              }}
              {...rest}
            />
          </FormControl>
    )
}