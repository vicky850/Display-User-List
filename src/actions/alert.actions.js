import { alertConstants } from '../constants';
/**
 * Summary: alert actions
 * Description: handle all sort of alert actions
 * @author Vikash Kumar.
 * @date  28.07.2018
 */
export const alertActions = {
    success,
    error
};
//success alert
function success(message) {
    return { type: alertConstants.SUCCESS, message };
}
//error alert
function error(message) {
    return { type: alertConstants.ERROR, message };
}
