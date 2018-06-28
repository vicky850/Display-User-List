/**
 * Summary: global file
 * Description: global functions file
 * @author Vikash Kumar.
 * @date  28.07.2018
 */
export const _global = {
    isEmpty
};

function isEmpty(_param) {
    return (_param === 'undefined' || _param === undefined || _param === '' || _param === null);
}