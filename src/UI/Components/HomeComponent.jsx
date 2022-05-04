import { Stack, Text, Grid } from "@chakra-ui/react";

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
                templateColumns={{
                    base: "repeat(1, 300px)",
                    md: "repeat(2, 300px)",
                    lg: "repeat(4,auto)",
                }}
                templateRows={{
                    base: "repeat(4, 300px)",
                    md: "repeat(2, 300px)",
                    lg: "repeat(1,300px)",
                }}
            >
                <CardHome
                    img={"https://fermentumfaber.com/imagenes/bar_04.jpg"}
                    redirection={"cat/cervezas"}
                    titulo={"nustros estilos"}
                />
                <CardHome
                    img={"https://fermentumfaber.com/imagenes/06_formatos.jpg"}
                    redirection={"cat/servicios"}
                    titulo={"servicios para bares"}
                />
                <CardHome
                    img={"https://fermentumfaber.com/imagenes/donde_trescalaveras.jpg"}
                    redirection={"cat/donde"}
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
