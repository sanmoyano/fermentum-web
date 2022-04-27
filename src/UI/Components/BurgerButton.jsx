import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@chakra-ui/react";

const Burger = (props) => {
    const menuIcon = <FontAwesomeIcon icon={faBars} />;
    const closeIcon = <FontAwesomeIcon icon={faXmark} />;

    const buttonSettings = {
        color: "brand.500",
        display: { base: "flex", md: "none" },
        fontSize: "xl",
        padding: 6,
        zIndex: 1,
    };

    return (
        <Box onClick={props.handleClick} {...buttonSettings}>
            {props.click ? closeIcon : menuIcon}
        </Box>
    );
};

export default Burger;
