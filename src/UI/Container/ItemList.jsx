import { Grid, Stack } from "@chakra-ui/react";

import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <Grid gridTemplateColumns={"repeat(3, 1fr)"} gridTemplateRows={"repeat(3, 1fr)"}>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </Grid>
    );
};

export default ItemList;
