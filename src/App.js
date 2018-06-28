/**
 * Summary: App (main component for routing)
 * Description:  App (main component for routing)
 * @author Vikash Kumar.
 * @date  28.07.2018
 */
import React from "react";
import { PearsonUsers } from "./PearsonUsers";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers/history';
require('font-awesome/css/font-awesome.min.css');

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div className="app-wrapper">
                    <div className="routing-wrapper">
                        <Switch>
                            <Route exact path="/" component={PearsonUsers} />
                            <Route path="*" component={PearsonUsers} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export { App }; 

