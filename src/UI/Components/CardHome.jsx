import { GridItem, Flex, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const CardHome = ({ img, titulo, redirection }) => {
    return (
        <GridItem
            bgColor={"brand.100"}
            borderRadius={"3px"}
            colSpan={1}
            display={"flex"}
            h={"100%"}
        >
            <Box className="image__box">
                <img alt="" src={img} />
                <Flex
                    bgColor={"brand.100"}
                    color={"brand.500"}
                    fontFamily={"heading"}
                    fontSize={"xl"}
                    p={2}
                    position={"absolute"}
                >
                    <NavLink to={redirection}>{titulo}</NavLink>
                </Flex>
            </Box>
        </GridItem>
    );
};

export default CardHome;
