import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLinks = ({ navItem, item, close }) => {
    const linkSettings = {
        _hover: { color: "brand.400" },
        transition: "all 0.2s ease-in-out",
    };

    return (
        <Link to={`/${navItem}`} onClick={close}>
            <Box {...linkSettings}>{item}</Box>
        </Link>
    );
};

export default NavLinks;
