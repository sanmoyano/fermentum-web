import { Stack, Box } from "@chakra-ui/react";

const FooterInfo = ({ titulo, subTitulo, info }) => {
    return (
        <Stack spacing={0}>
            <Box fontFamily={"heading"} fontSize={"2xl"} fontWeight={"heading"}>
                {titulo}
            </Box>
            <Box
                fontFamily={"body"}
                fontSize={"md"}
                fontWeight={"links"}
                textTransform={"uppercase"}
            >
                {subTitulo}
            </Box>
            <Box fontFamily={"body"} fontSize={"sm"} fontWeight={"medium"}>
                {info}
            </Box>
        </Stack>
    );
};

export default FooterInfo;
