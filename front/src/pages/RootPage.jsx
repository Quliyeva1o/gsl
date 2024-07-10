import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ScrollIco from "../Layout/ScrollIco";
const RootPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
            <ScrollIco/>
        </>
    );
};

export default RootPage;