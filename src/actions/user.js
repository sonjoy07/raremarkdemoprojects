export const Watch_setUserInfo = users => ({
    type: 'USER',
    users
})
export const setUserInfo = (users) => {

    return (dispatch) => {
        dispatch(Watch_setUserInfo(users));
        return users;
    }
}