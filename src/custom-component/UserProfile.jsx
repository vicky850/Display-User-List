/**
 * Summary: User Profile
 * Description: User profile (stateless component)
 * @author Vikash Kumar.
 * @date  28.07.2018
 */

import React from "react";
import { actionTypes } from '../constants/action-type.constants';
require('./css/user-profile.css');

export const UserProfile = (props) => {
    return (
      props.userlist.length ? props.userlist.map((user, index) => {
        return <div key={"box" + index} className="box">
          <div className="profile-image"><img src={user.avatar} alt="" /></div>
          <h2>{user.first_name} {user.last_name}</h2>
          <span className="delete" data-action={actionTypes.DELETE_DATA} onClick={(e)=>props.optionHandler(e, index)}>Delete</span>
        </div>
      }) : "Please refresh the page to load the data !"
    )
  }