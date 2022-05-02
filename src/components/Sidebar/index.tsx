import { Box, Drawer, DrawerBody, DrawerHeader, DrawerCloseButton, DrawerContent, DrawerOverlay, useBreakpointValue, Divider } from "@chakra-ui/react";

import { useSidebarContext } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    });

    const { isOpen, onClose } = useSidebarContext();

    if (isDrawerSidebar) {
       return (
           <Drawer isOpen={isOpen} onClose={onClose} placement="left">
               <DrawerOverlay>
                   <DrawerContent bg="gray.800" p="4">
                       <DrawerHeader fontSize="2xl" fontWeight="normal" mb="6">Navegação</DrawerHeader>
                       <DrawerCloseButton m="2" />
                       <DrawerBody>
                           <SidebarNav />
                       </DrawerBody>
                   </DrawerContent>
               </DrawerOverlay>
           </Drawer>
       ); 
    }
    return (
        <Box as="aside" w="64" mr="8">
            <SidebarNav />
        </Box>
    )
}