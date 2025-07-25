import { useEffect, useState } from "react"
import { useHero } from "../hook/useHero";
import { getUsers } from "../heroApi/api";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router";

export const FormLogin = () => {

    const [userInput, setUserInput] = useState('');
    const { state, dispatch } = useHero();
    const { logIn, userAuthenticated, error } = useAuth(state.users);
    const navigate = useNavigate();

    
    
    const handleOnChange = (e) => {

        setUserInput((prev) => ({...prev, [e.target.name] : e.target.value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userOk = logIn(userInput.username, userInput.password)

        if (userOk) {
            navigate(`/list-heroes/${userOk.id}`)
        }
        
    }


    const getUsersApi = async () => {
        const data = await getUsers();
        dispatch({
            type: 'addUsers',
            payload: data
        })

    }


    useEffect(()=>{
        getUsersApi();
    },[])
    



    return (
        <>
            <form onSubmit={handleSubmit} className="container mt-4 w-50 bg-success p-3">

        {
            userAuthenticated && 
            <h1>Welcome {userInput.username}</h1>
        }
        {
            error && 
            <h1>{error}</h1>
        }

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Nombre usuario
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        aria-describedby="emailHelp"
                        onChange={handleOnChange}
                    />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </>
    )
}