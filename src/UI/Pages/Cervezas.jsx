import { Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import ItemListContainer from "../Container/ItemListContainer";

const Cervezas = () => {
    return (
        <>
            <ItemListContainer />
            <Text bgColor={"red.500"} fontSize={"200px"}>
                Cervezas
            </Text>
        </>
    );
};

export default Cervezas;
