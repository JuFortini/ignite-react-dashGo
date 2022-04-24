import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { useSidebarContext } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {

  const isLargeWindow = useBreakpointValue({
    base: false,
    lg: true,
  })

  const { onOpen } = useSidebarContext();

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

			{!isLargeWindow &&
				<IconButton
				  aria-label="Abrir navegação"
				  icon={<Icon as={RiMenuLine} fontSize="24" mt="1.5" />}
				  variant="unstyled"
				  bg="gray.900"
				  onClick={onOpen}
				/>
			}

            <Logo />

            {isLargeWindow && <SearchBox />}

            <Flex
              align="center"
              ml="auto"
            >
                <NotificationsNav />

                <Profile showProfileData={isLargeWindow}/>

            </Flex>

        </Flex>
    )
}