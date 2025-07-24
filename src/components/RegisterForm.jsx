import { useEffect, useState } from "react"
import { useHero } from "../hook/useHero";
import { createUser, getUsers } from "../heroApi/api";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router";

export const RegisterForm = () => {

    const { state, dispatch } = useHero();
    const [inputRegister, setInputRegisdter] = useState('');
    const { isRegistered, error } = useAuth(state.users);
    const navigate = useNavigate();



    const getUsersApi = async () => {
        const data = await getUsers();
        dispatch({
            type: 'addUsers',
            payload: data
        })
    }

    const handleOnChange = (e) => {
        setInputRegisdter((prev) => ({...prev, [e.target.name] : e.target.value}));

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isRegistered(inputRegister.username)) {
            return
        } else {
            await createUser(inputRegister);
            navigate('/form-login')
        }


    }

    useEffect(()=> {
        getUsersApi()
    },[])


    return (
        <>
        <form onSubmit={handleSubmit} className="container mt-4 w-50 bg-secondary p-3">


        {
            error &&
            <h3>{error}</h3>
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