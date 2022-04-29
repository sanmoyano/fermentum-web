import { Stack, Box, Text, Button, Image, Grid, GridItem, Flex } from "@chakra-ui/react";

import CardHome from "./CardHome";

const HomeComponent = () => {
    return (
        <Stack alignItems={"center"} justifyContent={"center"} p={6}>
            <Stack mb={6}>
                <Text>NUESTRO MUNDO</Text>
            </Stack>
            <Grid
                alignItems={"center"}
                gap={6}
                minChildWidth="120px"
                templateColumns={{ base: "repeat(1, 300px)", lg: "repeat(4,400px)" }}
                templateRows={{ base: "repeat(4, 300px)", lg: "repeat(1,400px)" }}
            >
                <CardHome
                    img={"https://fermentumfaber.com/imagenes/bar_04.jpg"}
                    titulo={"Conoce nustros estilos"}
                />
                <CardHome />
                <CardHome />
                <CardHome />
            </Grid>
        </Stack>
    );
};

export default HomeComponent;
// templateColumns={"repeat(4, 400px)"}
