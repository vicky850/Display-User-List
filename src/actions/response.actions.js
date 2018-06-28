import {
    customErrorConst,
    httpErrorConst,
    validCodes
  } from "../constants";

  import { alertActions } from "./";

/**
 * Summary: response action
 * Description: handle all responses of api calls at one place ( for error handling etc)
 * @author Vikash Kumar.
 * @date  28.07.2018
 */

  export const responseActions = {
    response,
    errorResponse,
    successResponse
  };
  
  /**
   * Description: Get the type and its message
   * @param {object}  response
   * @return {object}
   */
  function response(response, message) {
    try {
  
      let responseData = {};
      let httpStatusCode;
      if (response.hasOwnProperty("response")) {
        response = response.response;
      }
      if (response) {
        responseData = response["data"];
        httpStatusCode = response["status"];
  
        if (validCodes(httpStatusCode)) {
          if (message) {
            return successResponse(message);
          }
          return successResponse(response);
        }
        else{
          if (responseData.hasOwnProperty("code")) {
            return errorResponse(customErrorConst[responseData["code"]], responseData["message"]);      //respond with custom error code
          }
          return errorResponse(httpErrorConst[httpStatusCode]);
        }
      } else {
        errorResponse(httpErrorConst[httpStatusCode]);
      }
    } catch (e) {
      return errorResponse(customErrorConst.ERROR_DEFAULT);
    }
  }

  /**
   * Description: Get the error message
   * @param {string}   errorMessage
   * @param {string}   serverMsg
   * @return {object}
   */
  function errorResponse(errorMessage, serverMsg) {
    let errorMsg = errorMessage
      ? errorMessage
      : serverMsg
        ? serverMsg
        : customErrorConst.ERROR_DEFAULT;
    return alertActions.error(errorMsg);
  }
  
  /**
   * Description: Get the success message
   * @param {string}   successMessage
   * @return {object}
   */
  function successResponse(successMessage) {
    return alertActions.success(successMessage);
  }
  