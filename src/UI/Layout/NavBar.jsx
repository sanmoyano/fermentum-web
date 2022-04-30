import { Stack, Slide } from "@chakra-ui/react";

import NavLinks from "../Components/NavLinks";

const NavBar = ({ open, closeClick }) => {
    console.log(open);
    const navLinksSettings = {
        fontFamily: "body",
        fontSize: "md",
        as: "nav",
        color: "brand.500",
        fontWeight: "links",
        spacing: "6",
        textTransform: "uppercase",
    };

    const closeNav = {
        ...(open
            ? { display: { base: "flex", md: "none" } }
            : { display: { base: "none", md: "flex" } }),
        direction: "row",
    };

    const openNav = {
        ...(open ? { direction: { base: "column", md: "row" } } : {}),
        bg: { base: "brand.100", md: "brand.700" },
        position: { base: "absolute" },
        padding: { base: "6", md: "0" },
        alignItems: { base: "center", md: "flex-start" },
        justifyContent: { base: "center", md: "flex-start" },
        left: -2,
        h: "100vh",
        w: "100%",
    };

    if (open === false) {
        return (
            <Stack {...closeNav} {...navLinksSettings} aria-label="main navigation">
                <NavLinks close={closeClick} item={"cervezas"} navItem={"cervezas"} />
                <NavLinks close={closeClick} item={"servicios"} navItem={"servicios"} />
                <NavLinks close={closeClick} item={"donde tomarnos"} navItem={"donde"} />
                <NavLinks close={closeClick} item={"nosotros"} navItem={"nosotros"} />
                <NavLinks close={closeClick} item={"contacto"} navItem={"contacto"} />
            </Stack>
        );
    } else {
        return (
            <Slide direction={"left"} in={open} unmountOnExit={true}>
                <Stack {...openNav} {...navLinksSettings} aria-label="main navigation">
                    <NavLinks close={closeClick} item={"inicio"} navItem={""} />
                    <NavLinks close={closeClick} item={"cervezas"} navItem={"cervezas"} />
                    <NavLinks close={closeClick} item={"servicios"} navItem={"servicios"} />
                    <NavLinks close={closeClick} item={"donde tomarnos"} navItem={"donde"} />
                    <NavLinks close={closeClick} item={"nosotros"} navItem={"nosotros"} />
                    <NavLinks close={closeClick} item={"contacto"} navItem={"contacto"} />
                </Stack>
            </Slide>
        );
    }
};

export default NavBar;

// const closeNav = {
//     ...(open
//         ? { display: { base: "flex", md: "none" } }
//         : { display: { base: "none", md: "flex" } }),
//     direction: "row",
// };

// const openNav = {
//     ...(open
//         ? { display: { base: "flex", md: "flex" } }
//         : { display: { base: "none", md: "flex" } }),
//     ...(open ? { direction: { base: "column", md: "row" } } : {}),
//     bg: { base: "brand.100", md: "brand.700" },
//     position: { base: "absolute", md: "relative" },
//     top: { base: "90", md: "0" },
//     padding: { base: "6", md: "0" },
//     marginLeft: 0,
//     left: -2,
//     h: "1000%",
//     w: "1000%",
// };
