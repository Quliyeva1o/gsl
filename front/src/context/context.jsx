import { createContext, useEffect, useState } from "react";
export const MyContext = createContext("");
// export const MyBasketContext = createContext("");
// export const MyWishListContext = createContext("");
import { getAll } from "../API/requests";

const ContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
        getAll().then((res) => {
            setItems(res.data);
        });
    }, []);
    return (
        <>
            {/* <MyWishListContext.Provider value={{wishList,setWishList}}>
                <MyBasketContext.Provider value={{ basket, setBasket }}> */}
                    <MyContext.Provider value={{ items, setItems }}>
                        {children}
                    </MyContext.Provider>
                {/* </MyBasketContext.Provider>
            </MyWishListContext.Provider> */}
        </>
    );
};

export default ContextProvider;