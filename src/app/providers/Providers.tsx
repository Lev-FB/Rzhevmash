import {BrowserRouter} from "react-router-dom";
import React from "react";
import {StoreContext} from "../context/storeContext.ts";
import Store from "../Store.ts";
interface Props {
    children:React.JSX.Element
}
const Providers = ({children}:Props)=>{

    return <BrowserRouter>
        <StoreContext.Provider value={Store}>
            {
                children
            }
        </StoreContext.Provider>

    </BrowserRouter>
}
export {Providers}