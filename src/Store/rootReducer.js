const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS' : {
            
            return {
                ...state,
                authError:null,
                user : action.user
            }
        }
        case 'LOGIN_FAILED' : {
            return {
                authError: action.err.message
            }
        }
        case 'SIGNOUT' : {
            return {
                authError : null
            }
        }
        
        default : return state
    }
}
export default authReducer;