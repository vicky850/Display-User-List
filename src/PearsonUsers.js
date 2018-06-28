/**
 * Summary: PersonUsers component which render the UserProfile list
 * Description: PersonUsers component which render the UserProfile list
 * @author Vikash Kumar.
 * @date  28.07.2018
 */
import React, { Component } from "react";
import { UserProfile } from './custom-component/UserProfile'
import { actionTypes } from './constants/action-type.constants';
import { alertConstants } from './constants/alert.constants';
import { customErrorConst } from './constants/error.constants';
import { userActions } from './actions/user.actions';
import _ from 'lodash';
require('./style.css');

//Pearson User Class
export class PearsonUsers extends Component {
  constructor(props) {
    super(props);
    this.optionHandler = this.optionHandler.bind(this)

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ],
      alert: { type: null, message: null },
      page: 1,
      per_page: 10
    };
  }

  optionHandler(ev, id, index) {
    if (ev.target.dataset.action === actionTypes.DELETE_DATA) {
      var newUserList = [...this.state.users]; // make a separate copy of the array
      newUserList.splice(index, 1);
      this.setState({ users: newUserList, page: 0 });
    }
  }

  displayUsers(e) {
    let newUserList = [];
    let pageCount = this.state.page;
    //get user list
    userActions.getUsers(pageCount, this.state.per_page).then(
      (response) => {
        if (response) {
          if (response.type && (response.type === alertConstants.SUCCESS)) {
            response = response.message;
            newUserList = response.data.data;
            let error_alert = { type: null, message: null };
            this.setState({ users: [...this.state.users, ...newUserList], page: pageCount + 1, alert: error_alert });
          } else if (response.type === alertConstants.ERROR) {
            let error_alert = { type: alertConstants.ERROR, message: customErrorConst.ERROR_DEFAULT };
            this.setState({ alert: error_alert });
          }
        } else {
          let error_alert = { type: alertConstants.ERROR, message: customErrorConst.ERROR_DEFAULT };
          this.setState({ alert: error_alert });
        }
      }
    ).catch(this.errorHandle);
  }

  removeDuplicate(e) {
    let uniqueUsers = _.mapKeys(this.state.users, 'id');
    let uniqueUsersArray = _.map(uniqueUsers);
    this.setState({ users: uniqueUsersArray });
  }


  render() {
    return (
      <div className="pearon-users">
        <h1>Pearson User Management</h1>
        {
          this.state.alert.message &&
          <div id="alert-messgae" className={`alert alert-${this.state.alert.type}`}>{this.state.alert.message}</div>
        }
        <div className="bx-wrapper">
          <UserProfile optionHandler={this.optionHandler} userlist={this.state.users} />
        </div>
        <div>
          <button type="button" className="button" id="fetchUsers" onClick={(e) => this.displayUsers(e)}>
            <span className="blue" aria-hidden="true"></span> Get More Users
          </button>
          <button type="button" className="button" id="fetchUsers" onClick={(e) => this.removeDuplicate(e)}>
            <span className="blue" aria-hidden="true"></span> Remove Duplicate
          </button>
        </div>

      </div>
    );
  }
}
