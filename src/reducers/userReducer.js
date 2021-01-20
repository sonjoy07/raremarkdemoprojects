const adduserReducer = {
    users:[]
};

export default (state = adduserReducer,action ) =>{

    switch(action.type) {
        case 'USER':
            return {
                ...state,
                users:action.users
            }
       

        default:
        return {
            ...state
        }
    }

}