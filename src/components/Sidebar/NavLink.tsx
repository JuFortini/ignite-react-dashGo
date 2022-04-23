import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType,
    children: string,
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
    return (
        <Link display="flex" alignItems="center" gap="4" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text fontWeight="medium">{children}</Text>
        </Link>
    );
}