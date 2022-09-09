import React from "react";
import {
     Route,
    Redirect,
    Switch,
    BrowserRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Register from "./Component/Auth/register";

const NoMatchPage = () => {
    return (
        <Row className="margin-top">
            <Col xs={{ span: 12, offset: 6 }}>
                <Card>
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h2>Page not found</h2>
                            <Link to="/user">back to member</Link>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

const UnRestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            !isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/user',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

const Router = ({ history, isLoggedIn }) => {
    return (
        <ConnectedRouter history={history}>
             <BrowserRouter>
            <Switch>
                <UnRestrictedRoute
                    exact
                    path="/"
                    component={Register}
                    isLoggedIn={isLoggedIn}
                />
                <Route path="*" component={NoMatchPage} />
            </Switch>
            </BrowserRouter>
        </ConnectedRouter>
    )
}

export default connect((state) => ({
    isLoggedIn: "state.auth.token" === null
}))(Router);