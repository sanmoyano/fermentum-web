import { Box, Center, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLogo = () => {
    return (
        <Box display={{ base: "none", md: "flex" }} h="100%" marginLeft={6}>
            <Center color="brand.500" h="100%" padding={2}>
                <Link to="/">
                    <Box boxSize={150} h={"100%"}>
                        <Image
                            alt="fermentum faber"
                            src="https://fermentumfaber.com/icons/logo_nombre_ws.svg"
                        />
                    </Box>
                </Link>
            </Center>
        </Box>
    );
};

export default NavLogo;
