const adduserReducer = {
    users:[],
    posts:[]
};

export default (state = adduserReducer,action ) =>{

    switch(action.type) {
        case 'USER':
            return {
                ...state,
                users:action.users
            }
        case 'POSTS':
            return {
                ...state,
                posts:action.posts
            }
       

        default:
        return {
            ...state
        }
    }

}