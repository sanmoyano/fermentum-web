import { BrowserRouter } from "react-router-dom";

import Header from "./UI/Layout/Header";
import Main from "./UI/Layout/Main";
import Footer from "./UI/Layout/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
