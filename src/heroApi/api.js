

export const getUsers = async () => {
    const response = await fetch('https://hero-api-59hz.onrender.com/users');

    const data = await response.json()
    
    return data
}


export const getHeroes = async (id) => {
    const response = await fetch(`https://hero-api-59hz.onrender.com/users/${id}`);
    const data = await response.json()

    return data.heroes
}

export const createUser = async (newUser) => {
    const response = await fetch('https://hero-api-59hz.onrender.com/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newUser)
    })
}