import { useState } from "react"

export const useAuth = (userList) => {

    const [userAuthenticated, setUserAuthenticated] = useState(null);
    const [error, setError] = useState(null);

    
    const logIn = (username, password) => {

        const user = userList.find(user => user.username === username && user.password === password);

        if (user) {
            setUserAuthenticated(user);
            setError(null)
            return user
        } else {
            setUserAuthenticated(null);
            setError('ERROR');
            return null
        }


    }

    const isRegistered = (username) => {
        const register = userList.some(user => user.username === username)

        if (register) {
            setError('Usuario existente')
        }

        return register
    }


    return {
        userAuthenticated, logIn, error, isRegistered
        
    }

}