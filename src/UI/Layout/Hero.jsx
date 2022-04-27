import { Box, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <Box
            alignItems={{ base: "flex-end", md: "center" }}
            backgroundImage={"url(https://fermentumfaber.com/imagenes/portada_hero.jpg)"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            display="flex"
            fontSize={"100px"}
            h={"100vh"}
            justifyContent={{ base: "center", md: "flex-start" }}
            padding={6}
            textAlign="start"
        >
            <Stack spacing={6}>
                <Text
                    as="h1"
                    color={"brand.500"}
                    display={{ base: "none", sm: "block" }}
                    fontFamily={"heading"}
                    fontWeight={"heading"}
                    lineHeight={"90px"}
                    padding={".5px"}
                >
                    fermentum <br />
                    faber
                </Text>
                <Text
                    bg={"brand.100"}
                    borderRadius={"0.2rem"}
                    color={"brand.500"}
                    fontFamily={"body"}
                    fontSize={"md"}
                    fontWeight={"links"}
                    padding={2}
                >
                    Somos una reconocida fábrica de cervezas en la Ciudad de Córdoba.
                </Text>
                <Button size={"md"} width={{ base: "", sm: "xs" }}>
                    <Link to="/nosotros">sobre nosotros</Link>
                </Button>
            </Stack>
        </Box>
    );
};

export default Hero;
