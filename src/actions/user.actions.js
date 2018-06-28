/**
 * Summary: user action
 * Description: User Actions which intracts with services or perform some sort of action
 * @author Vikash Kumar.
 * @date  28.07.2018
 */
import { baseService } from '../services/baseService';
import { authHeader } from '../helpers/auth-header';
import { uriConstants } from '../constants/uri.constants';
import { responseActions } from './response.actions';
/**
* Description: User Actions  would be exposed so it can be accessed outside
* @param {null}
* @return {null}
*/
export const userActions = {
    getUsers
};

/**
 * Description: Get the list of users from API call on the basis of offset and limit
 * @param {number}   offset
 * @param {number}   limit
 * @return {object} 
 */
function getUsers(offset, limit) {
    let url = uriConstants.GET_USERS + `?page=${offset}&per_page=${limit}`;
    return baseService.get(url, authHeader()).then(
        req_response => {
            let getResponse = responseActions.response(req_response);
            if (getResponse) {
                return getResponse;
            }
        },
        error => {
            return responseActions.errorResponse(error);
        }
    )
}
