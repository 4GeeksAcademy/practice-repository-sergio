import { createContext, useReducer } from "react";
import { heroReduces, initialState } from "../reduces/heroReduces";

export const HeroContext = createContext();

export const HeroProvider = ({children}) => {

    const [state, dispatch] = useReducer(heroReduces, initialState);

    return (
        <HeroContext.Provider value={{state, dispatch}}>{children}</HeroContext.Provider>
    )
}