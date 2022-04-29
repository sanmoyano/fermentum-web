import { GridItem, Flex } from "@chakra-ui/react";

const CardHome = ({ img, titulo }) => {
    return (
        <GridItem
            alignItems={"center"}
            bg={"brand.900"}
            bgImage={img}
            bgPosition={"center"}
            bgSize={"cover"}
            borderRadius={"50%"}
            colSpan={1}
            display={"flex"}
            h={"100%"}
            justifyContent={"center"}
            opacity={1}
            sx={{
                "&:hover": {
                    opacity: 0.5,
                    transform: "scale(1.05)",
                },
            }}
            transition={"all .5s ease-in-out"}
            w={"100%"}
        >
            <Flex>{titulo}</Flex>
        </GridItem>
    );
};

export default CardHome;
