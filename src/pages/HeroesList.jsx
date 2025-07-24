import { useEffect } from "react";
import { useParams } from "react-router"
import { getHeroes } from "../heroApi/api";
import { useHero } from "../hook/useHero";

export const HeroesList = () => {

    const {id} = useParams();
    const {state, dispatch} = useHero();

    const getHeroesList = async () => {
        const data = await getHeroes(id);
        dispatch({
            type: 'listHeroes',
            payload: data
        })
    }


    useEffect(()=>{
        getHeroesList()
    },[])



    return(
        <>
        <h1>lista heroes</h1>

        {
            state.heroes.length > 0
            ?
            state.heroes.map(heroe => (
                <div>
                    <h2>{heroe.name}</h2>
                    <h4>{heroe.age}</h4>
                    <h4>{heroe.secret_name}</h4>
                </div>
            ))
            :
            <h2>No tienes nada</h2>
        }
        </>
    )
}