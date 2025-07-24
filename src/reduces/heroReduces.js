export const initialState = {
    users: [],
    heroes: []
}

export const heroReduces = (state, action) => {
    switch (action.type) {
        case 'addUsers': 
        return{
            ...state, users: action.payload
        }
        case 'listHeroes':
            return{
                ...state, heroes: action.payload
            }
        default:
            return state
    }
}