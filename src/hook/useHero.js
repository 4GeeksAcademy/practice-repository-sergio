import { useContext } from "react"
import { HeroContext } from "../context/contextHero.jsx"

export const useHero = () => {
    const {state, dispatch} = useContext(HeroContext);
    return {state, dispatch}
}