const GithubReducer = (state, action) => {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                users: action.payload,
                loading: false

            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "CLEAR_USER":
            return {
                ...state,
                users: []
            }
        case "GET_SINGLEUSER":
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default:
            return state
    }


}

export default GithubReducer