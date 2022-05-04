import { Stack } from "@chakra-ui/react";

import Formulario from "../Components/Formulario";
import TitleSection from "../Components/TitleSection";

const Contacto = () => {
    return (
        <>
            <TitleSection cat={"contacto"} />
            <Stack alignItems={"center"} justifyContent={"center"} p={6}>
                <Formulario />
            </Stack>
        </>
    );
};

export default Contacto;
