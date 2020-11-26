import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from './components/Menu';
import Nav from './components/Nav';

const Wrapper = (props: any) => {
	const [redirect, setRedirect] = useState(false);

	const fetchUsers = async () => {
		try {
			Axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
				'token'
			)}`;
			const res = await Axios.get('user');
		} catch (er) {
			setRedirect(true);
			// return history.push('/login');
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return redirect ? (
		<Redirect to="/login" />
	) : (
		<>
			<Nav />

			<div className="container-fluid">
				<div className="row">
					<Menu />
					<main
						role="main"
						className="col-md-9 ml-sm-auto col-lg-10 px-md-4"
					>
						{props.children}
					</main>
				</div>
			</div>
		</>
	);
};

export default Wrapper;
