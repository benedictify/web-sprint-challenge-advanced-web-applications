import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';

const App = () => {
	const [token, setToken] = useState('');

	return (
		<AppContainer>
			<LambdaHeader />
			<Header />

			<RouteContainer>
				<Route exact path="/">
					<Login />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>

				<PrivateRoute exact path="/view" token={token} component={View} />
				<PrivateRoute exact path="/logout" token={token} component={Logout} />
			</RouteContainer>

		</AppContainer>
	)
}

export default App;

const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
