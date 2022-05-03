import { Grid, Stack } from "@chakra-ui/react";

import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <Grid
            gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gridTemplateRows={"repeat(auto, 1fr)"}
        >
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </Grid>
    );
};

export default ItemList;
