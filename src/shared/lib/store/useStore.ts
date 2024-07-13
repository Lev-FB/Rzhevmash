import {useContext} from "react";
import {StoreContext} from "../../../app/context/storeContext.ts";

export const useStore = ()=>useContext(StoreContext)