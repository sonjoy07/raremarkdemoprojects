export const Watch_setUserInfo = users => ({
    type: 'USER',
    users
})
export const Watch_setPostsInfo = posts => ({
    type: 'POSTS',
    posts
})
export const setUserInfo = (users) => {

    return (dispatch) => {
        dispatch(Watch_setUserInfo(users));
        return users;
    }
}
export const setPostInfo = (users) => {

    return (dispatch) => {
        dispatch(Watch_setPostsInfo(users));
        return users;
    }
}