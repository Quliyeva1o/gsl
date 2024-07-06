import Home from "../pages/Home";
import NewsPage from "../pages/NewsPage";
import RootPage from "../pages/RootPage";

export const ROOT = [
    {
        path: "/",
        element: <RootPage/>,
        children: [
            { index: true, element: <Home /> },
            {
                path: "/news",
                element: <NewsPage />,
            },
            // {
            //     path: "basket",
            //     element: <Basket />,
            // },
            // {
            //     path: "detail/:id",
            //     element: <Detail/>,
            // },
            // {
            //     path:"wishlist",
            //     element:<WishList/>
            // }
        ],
    },
];