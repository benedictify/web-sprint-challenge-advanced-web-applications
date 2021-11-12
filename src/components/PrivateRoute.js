import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, token: token, ...rest }) {
	return (<Route {...rest} render={props => {
		if (token) {
			return <Component {...props} />
		} else {
			return <Redirect to={"/login"} />
		}
	}} />);
}

export default PrivateRoute;
