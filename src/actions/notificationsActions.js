export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'

export function showNotification(notificationText){
    return dispatch => {
        dispatch({
            type: SHOW_NOTIFICATION,
            notificationText
        })

        setTimeout(() => { dispatch ({ type: HIDE_NOTIFICATION })}, 6000);
    }
}