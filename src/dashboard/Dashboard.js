import React, { Component, Fragment } from 'react';
import { GET_LIST, Responsive, Title } from 'react-admin';

import Welcome from './Welcome';
import NewCustomers from './NewCustomers';
import dataProviderFactory from '../dataProvider';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em', marginBottom: '2em' },
};

class Dashboard extends Component {
    state = {};

    componentDidMount() {
        const aMonthAgo = new Date();
        aMonthAgo.setDate(aMonthAgo.getDate() - 30);

        dataProviderFactory("rest").then(
            dataProvider => {
                dataProvider(GET_LIST, 'customers', {
                    filter: {
                        has_ordered: true,
                        first_seen_gte: aMonthAgo.toISOString(),
                    },
                    sort: { field: 'first_seen', order: 'DESC' },
                    pagination: { page: 1, perPage: 6 },
                })
                    .then(response => response.data)
                    .then(newCustomers => {
                        this.setState({ newCustomers });
                        this.setState({
                            nbNewCustomers: newCustomers.reduce(nb => ++nb, 0),
                        });
                    });
            }
        );
    }

    render() {
        const {
            nbNewCustomers,
            newCustomers,
        } = this.state;
        return (
            <Fragment>
                <Title title="C R M Portal" style={{color: 'yellow'}} />
                <Responsive
                    xsmall={
                        <div>
                            <div style={styles.flexColumn}>
                                <div style={styles.flex}>
                                    <Welcome />
                                </div>
                                <div style={styles.singleCol}>
                                    <NewCustomers
                                        nb={nbNewCustomers}
                                        visitors={newCustomers}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    small={
                        <div style={styles.flexColumn}>
                            <div style={styles.singleCol}>
                                <Welcome />
                            </div>
                            <div style={styles.singleCol}>
                                <NewCustomers
                                    nb={nbNewCustomers}
                                    visitors={newCustomers}
                                />
                            </div>
                        </div>
                    }
                    medium={
                        <div style={styles.flex}>
                            <div style={styles.leftCol}>
                                <div style={styles.singleCol}>
                                    <Welcome />
                                </div>
                            </div>
                            <div style={styles.rightCol}>
                                <div style={styles.flex}>
                                    <NewCustomers
                                        nb={nbNewCustomers}
                                        visitors={newCustomers}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                />
            </Fragment>
        );
    }
}

export default Dashboard;
