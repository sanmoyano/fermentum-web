import { Stack } from "@chakra-ui/react";
import { useState } from "react";

import TiendaLink from "../Components/TiendaLink";
import BurgerButton from "../Components/BurgerButton";
import NavLogo from "../Components/NavLogo";

import NavBar from "./NavBar";

const Header = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <Stack
            alignItems="center"
            as="header"
            backgroundColor={"brand.100"}
            direction="row"
            h={24}
            justifyContent={"space-between"}
            position={{ base: "fixed", md: "static" }}
            w="100%"
            zIndex={1}
        >
            <NavLogo />
            <BurgerButton click={clicked} handleClick={handleClick} />
            <NavBar closeClick={handleClick} open={clicked} />
            <TiendaLink />
        </Stack>
    );
};

export default Header;
