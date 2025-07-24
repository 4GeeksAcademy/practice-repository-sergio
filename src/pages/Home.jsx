import { useEffect } from "react"
import { getUsers } from "../heroApi/api"
import { useHero } from "../hook/useHero"
import { Link } from "react-router"



export const Home = () => {

    const { state, dispatch } = useHero()

    const getUserApi = async () => {
        const data = await getUsers();
        dispatch({
            type: 'addUsers',
            payload: data
        })
    }


    console.log(state.users);


    useEffect(() => {
        getUserApi()
    }, [])


    return (
        <>

            <div>
                <h1 className="text-center">Bienvenido</h1>

                <div className="text-center mt-2">
                    <Link to={'/form-login'}>
                        <button>Log In</button>
                    </Link>
                    <Link to={'/register'}>
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        </>
    )
}