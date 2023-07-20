import { createContext, useContext } from "react";
import ProjectStore from "./projectStore";


export const store = {
    projectStore: new ProjectStore(),
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}