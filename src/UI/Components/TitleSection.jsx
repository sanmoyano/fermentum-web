import { Text } from "@chakra-ui/react";

const TitleSection = ({ cat }) => {
    return (
        <Text
            bgColor={"brand.200"}
            color={"brand.500"}
            fontFamily={"heading"}
            fontSize={"6xl"}
            textAlign={"center"}
        >
            {cat}
        </Text>
    );
};

export default TitleSection;
