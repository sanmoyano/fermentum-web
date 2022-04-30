import { Stack, Box, Text, Button, Image, Grid, GridItem, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import CardHome from "./CardHome";

const HomeComponent = () => {
    return (
        <Stack alignItems={"center"} justifyContent={"center"} p={6}>
            <Stack mb={6}>
                <Text
                    color={"brand.100"}
                    fontFamily={"heading"}
                    fontSize={"4xl"}
                    fontWeight={"extrabold"}
                >
                    mundo fermentum
                </Text>
            </Stack>
            <Grid
                alignItems={"center"}
                gap={6}
                minChildWidth="120px"
                templateColumns={{
                    base: "repeat(1, 300px)",
                    md: "repeat(2, 300px)",
                    lg: "repeat(4,400px)",
                }}
                templateRows={{
                    base: "repeat(4, 300px)",
                    md: "repeat(2, 300px)",
                    lg: "repeat(1,400px)",
                }}
            >
                <CardHome
                    img={"https://fermentumfaber.com/imagenes/bar_04.jpg"}
                    redirection={"/cervezas"}
                    titulo={"nustros estilos"}
                />
                <CardHome
                    img={"https://fermentumfaber.com/imagenes/06_formatos.jpg"}
                    redirection={"/servicios"}
                    titulo={"servicios para bares"}
                />
                <CardHome
                    img={"https://fermentumfaber.com/imagenes/donde_trescalaveras.jpg"}
                    redirection={"/donde"}
                    titulo={"donde encontrarnos"}
                />
                <CardHome
                    img={"https://fermentumfaber.com/imagenes/nosotros_proposito.jpg"}
                    redirection={"/contacto"}
                    titulo={"contactanos"}
                />
            </Grid>
        </Stack>
    );
};

export default HomeComponent;
// templateColumns={"repeat(4, 400px)"}
