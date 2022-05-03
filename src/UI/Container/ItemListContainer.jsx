import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Flex, Spinner } from "@chakra-ui/react";

import { db } from "../../API/firebase";
import TitleSection from "../Components/TitleSection";

import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCat } = useParams();

    console.log(idCat);

    useEffect(() => {
        const dbColection = collection(db, "mundoFermentum");
        const dbConsutla = getDocs(dbColection);
        const dbGetDatos = (consulta) => {
            consulta
                .then((res) => setItems(res.docs.map((doc) => doc.data())))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        };

        !idCat
            ? dbGetDatos(dbConsutla)
            : dbGetDatos(getDocs(query(dbColection, where("cat", "==", idCat))));
    }, [idCat]);

    if (loading) {
        return (
            <Flex alignItems={"center"} justifyContent={"center"} m={6}>
                <Spinner size={"xl"} thickness={"4px"}>
                    Cargando...
                </Spinner>
            </Flex>
        );
    } else {
        return (
            <>
                <TitleSection cat={idCat} />
                <ItemList items={items} />
            </>
        );
    }
};

export default ItemListContainer;
