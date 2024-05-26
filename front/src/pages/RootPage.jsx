import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
const RootPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    );
};

export default RootPage;