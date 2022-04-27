import { Stack } from "@chakra-ui/react";

import Hero from "../Layout/Hero";
import HomeComponent from "../Components/HomeComponent";

const Home = () => {
    return (
        <Stack>
            <Hero />
            <HomeComponent />
        </Stack>
    );
};

export default Home;
