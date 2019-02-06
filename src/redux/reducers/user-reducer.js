import { LOGGEDIN, LOGGED_OUT } from "../actions/root.action";

const INITIAL_STATE = {
    name : '',
    email : '',
    is_login : false,
    avatar : '',
    auth_token : '' ,
    uuid : '',
    interested_events : [],
    invitations : ''
} 

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGGEDIN:
        let avatarValue = action.payload.user.name.charAt(0);
        return({
            ...state,
            uuid : action.payload.user._id,
            name : action.payload.user.name,
            email : action.payload.user.email,
            avatar : avatarValue,
            token : action.payload.token,
            is_login : true,
            interested_events : action.payload.user.interested_events,
            invitations : action.payload.user.invitations
        })
        case LOGGED_OUT:
        return({ 
            ...state,
            is_login : false
        })
        default: 
        return state
    }
}