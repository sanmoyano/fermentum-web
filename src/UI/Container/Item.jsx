import { Box, Stack, Text, GridItem, Flex, Grid } from "@chakra-ui/react";

const Item = ({ item }) => {
    return (
        <GridItem
            alignItems={"center"}
            bgImage={item.img}
            bgPosition={"center"}
            bgSize={"cover"}
            h={"300px"}
            justifyContent={"center"}
            w={"100%"}
        >
            <Text>{item.nombre}</Text>
            <Text>{item.description}</Text>
        </GridItem>
    );
};

export default Item;
