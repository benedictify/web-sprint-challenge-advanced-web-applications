import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => {
	const history = useHistory();
	
	useEffect(() => {
		axiosWithAuth()
			.post(`/logout`)
			.then(response => {
				localStorage.removeItem('token');
				history.push('/login');
			})
			.catch(error => {
				console.log(error)
			});
	})

	return (
		<div>
			
		</div>
	);
}

export default Logout;
