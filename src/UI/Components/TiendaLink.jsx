import { Link, Box, Center, HStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const TiendaLink = () => {
    const shoppingCart = <FontAwesomeIcon icon={faBagShopping} />;

    return (
        <Box zIndex={1}>
            <Center
                color="brand.500"
                fontFamily={"body"}
                h="100%"
                padding={6}
                textTransform="uppercase"
            >
                <Link
                    _hover={{ color: "brand.400" }}
                    fontSize="md"
                    fontWeight="links"
                    href="https://pency.app/fermentum"
                    rel="noreferrer"
                    target={"_blank"}
                >
                    <HStack alignItems="baseline" spacing={4}>
                        <Text>shop</Text>
                        {shoppingCart}
                    </HStack>
                </Link>
            </Center>
        </Box>
    );
};

export default TiendaLink;
