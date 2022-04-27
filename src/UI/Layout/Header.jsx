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
            backdropFilter={`blur(10px)`}
            backgroundColor={{ base: "brand.100", md: "brand.700" }}
            direction="row"
            h={24}
            justifyContent={"space-between"}
            position={"fixed"}
            transition="all 0.2s ease-in-out"
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
