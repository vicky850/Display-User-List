import React from 'react';
import { PearsonUsers } from "../PearsonUsers";
import { shallow } from 'enzyme';
import { UserProfile } from '../custom-component/UserProfile';

//test case for rendring user list and elements
describe('PearsonUsers Test Suite', function () {
  let component;
  beforeEach(() => {
    component = shallow(<PearsonUsers />);
  })
  it('should render without throwing any error', function () {
    expect(component.length).toEqual(1)
  })

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it("should render initial layout", () => {
    expect(component.getElements()).toMatchSnapshot();
  });



  //data set for testing
  let _statePearsonUsers = [
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
      id: 5,
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    }
  ]

  var objPearsonUsers = new PearsonUsers();
  
  //mocking of setState function
  PearsonUsers.prototype.setState = obj => {
    if (typeof obj === 'function') {
      var _obj = obj(stateData);
      if (Object.keys(_obj).length > 0) {
        var testKey = Object.keys(_obj);
        for (var i = 0; i < testKey.length; i++) {
          objPearsonUsers.state[testKey[i]] = _obj[testKey[i]];
        }
      }
      return _obj;
    }
    if (Object.keys(obj).length > 0) {
      var testKey = Object.keys(obj);
      for (var i = 0; i < testKey.length; i++) {
        objPearsonUsers.state[testKey[i]] = obj[testKey[i]];
      }
    }
    return obj;
  };

  it("it should remove duplicate entries", () => {
    component.setState({ users: _statePearsonUsers });
    objPearsonUsers.removeDuplicate();
    expect(objPearsonUsers.state.users.length).toBe(2);
  });


  it("should delete individual user", () => {
    let event={target:{dataset :{action:"delete"}}};
    objPearsonUsers.optionHandler(event, 1);
    expect(objPearsonUsers.state.users[0]).toEqual(_statePearsonUsers[0]);
  });
})
