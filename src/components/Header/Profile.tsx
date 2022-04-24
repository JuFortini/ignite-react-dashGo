import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean,
}

export function Profile({ showProfileData = false }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && 
                <Box textAlign="right" mr="4">
                    <Text>Jucimara Fortini</Text>
                    <Text color="gray.300" fontSize="small">jucimaraafortini@gmail.com</Text>
                </Box>
            }
            <Avatar size="md" name="Jucimara Fortini" src="https://github.com/JuFortini.png" />
        </Flex>
    );
}