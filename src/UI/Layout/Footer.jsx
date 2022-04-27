import { Box, HStack, Stack, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faSpotify } from "@fortawesome/free-brands-svg-icons";

import FooterInfo from "../Components/FooterInfo";

const Footer = () => {
    const instagram = <FontAwesomeIcon icon={faInstagram} />;
    const facebook = <FontAwesomeIcon icon={faFacebookF} />;
    const spotify = <FontAwesomeIcon icon={faSpotify} />;

    const iconSettings = {
        fontSize: "4xl",
        _hover: { color: "brand.400" },
        transition: "all 0.2s ease-in-out",
    };

    return (
        <Stack direction={"column"}>
            <Stack alignItems="center" bg="brand.100">
                <Stack
                    bg="brand.800"
                    color="brand.100"
                    direction={{ base: "column", md: "row" }}
                    justifyContent={"space-around"}
                    p={6}
                    spacing={12}
                    width={"100%"}
                >
                    <Box>FORMULARIO</Box>
                    <Stack spacing={4}>
                        <Text fontFamily={"heading"} fontSize={"2xl"}>
                            HORARIOS
                        </Text>
                        <FooterInfo info={"09hs - 19hs."} subTitulo={"lunes a viernes"} />
                        <FooterInfo info={"CERRADO"} subTitulo={"sabados y domingos"} />
                        <FooterInfo
                            info={"En la Ciudad de Córdoba de 09hs a 19hs."}
                            subTitulo={"ENVIOS Y TAKEAWAY DE LUNES A VIERNES"}
                        />
                    </Stack>
                    <FooterInfo
                        info={"Ciudad de Córdoba."}
                        subTitulo={"córdoba"}
                        titulo={"encontranos"}
                    />
                    <FooterInfo
                        info={"+549 (351) 307-3541"}
                        subTitulo={"llamanos"}
                        titulo={"whatsapp"}
                    />
                </Stack>
                <Stack
                    alignItems={"center"}
                    color={"brand.500"}
                    direction={{ base: "column", md: "row" }}
                    justifyContent={"space-between"}
                    w={"100%"}
                >
                    <HStack as={"section"} padding={6} spacing={6}>
                        <Link {...iconSettings} href="">
                            <Box>{instagram}</Box>
                        </Link>
                        <Link {...iconSettings} href="">
                            <Box>{facebook}</Box>
                        </Link>
                        <Link {...iconSettings} href="">
                            <Box>{spotify}</Box>
                        </Link>
                    </HStack>
                    <Text fontFamily={"body"} fontSize={"xs"} p={6} textAlign={"center"}>
                        2021 - Fermentum Faber, Córdoba Argentina. Todos los derechos reservados.
                        Disfrutar responsablemente.
                        <strong> Prohibida su venta a menores de 18 años.</strong>
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Footer;
