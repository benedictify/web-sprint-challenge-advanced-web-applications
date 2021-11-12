import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Login = () => {
	const history = useHistory();
	const [error, setError] = useState("");
	const [credentials, setCredentials] = useState({
		username: 'Lambda',
		password: 'School'
	});

	const submitHandler = (event) => {
		event.preventDefault();

		axios.post('http://localhost:5000/api/login', credentials)
			.then(response => {
				localStorage.setItem('token', response.data.token);

				history.push('/view');
			})
			.catch(err => {
				setError(err);
			});
	};

	const changeHandler = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value
		})
	};

	return (
		<ComponentContainer>
			<ModalContainer>
				<h1>Welcome to Blogger Pro</h1>
				<h2>Please enter your account information.</h2>
			</ModalContainer>

			<FormGroup onSubmit={submitHandler}>
				<Label>Username
					<Input
						type="text"
						name="username"
						id="username"
						placeholder="Username"
						value={credentials.username}
						onChange={changeHandler}
					/>
				</Label>
				<Label>Password
					<Input
						type="text"
						name="password"
						id="password"
						placeholder="Password"
						value={credentials.password}
						onChange={changeHandler}
					/>
				</Label>
				<Button id="submit">Log in</Button>

				{error && <p id="error">{error}</p>}
			</FormGroup>

		</ComponentContainer>);
}

export default Login;

//Task List

//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**


const ComponentContainer = styled.div`
	height: 70%;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
`

const ModalContainer = styled.div`
	width: 500px;
	background: white;
	padding: 2rem;
	text-align: center;
	margin-top: 7.5rem;
`

const Label = styled.label`
	display: block;
	text-align: left;
	font-size: 1.5rem;
`

const FormGroup = styled.form`
	padding:1rem;
`

const Input = styled.input`
	font-size: 1rem;
	padding: 1rem 0;
	width: 100%;
`

const Button = styled.button`
	padding: 1rem;
	width: 100%;
`
