import { Stack, Text, GridItem, HStack, VStack, Link } from "@chakra-ui/react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ item }) => {
    const textSettings = {
        fontSize: "md",
        fontWeight: "body",
        color: "brand.500",
        textAlign: "center",
        fontFamily: "body",
    };

    const titleSettings = {
        fontSize: "2xl",
        fontWeight: "heading",
        color: "brand.500",
        fontFamily: "heading",
        textAlign: "center",
    };

    const subTitleSettings = {
        fontSize: "xl",
        fontWeight: "heading",
        color: "brand.500",
        fontFamily: "heading",
        textAlign: "center",
    };

    const locationPin = <FontAwesomeIcon icon={faLocationDot} />;

    const settingCatText = () => {
        if (item.cat === "cervezas") {
            return (
                <HStack {...subTitleSettings}>
                    <Text>alcohol {item.alcohol}% |</Text>
                    <Text>ibu {item.ibu}</Text>
                </HStack>
            );
        } else if (item.cat === "donde") {
            return (
                <VStack {...textSettings}>
                    <Text>{item.direccion}</Text>
                    <Link href={item.ubicacion}>{locationPin}</Link>
                </VStack>
            );
        } else {
            return "";
        }
    };

    return (
        <GridItem>
            <div className="masterCard">
                <img alt={item.nombre} src={item.img} />
                <Stack className="masterCard--description">
                    <Stack>
                        <Text {...titleSettings}>{item.nombre}</Text>
                    </Stack>
                    <Stack>
                        <Text {...textSettings}>{item.description}</Text>
                    </Stack>
                    {settingCatText()}
                </Stack>
            </div>
        </GridItem>
    );
};

export default Item;
