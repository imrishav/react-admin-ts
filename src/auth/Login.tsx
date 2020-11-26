import React from 'react';
import './public.css';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

interface IFormInput {
	email: String;
	password: String;
}

const Login = () => {
	const { register, handleSubmit } = useForm<IFormInput>();
	const history = useHistory();

	const onSubmit = async (data: IFormInput) => {
		//Returns Token..
		const request = await Axios.post('login', data);

		localStorage.setItem('token', request.data.token);
		Axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
			'token'
		)}`;

		history.push('/');

		// setRedirect(true);

		// console.log(request);
	};

	return (
		<form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
			{/* <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> */}
			<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
			<label htmlFor="email" className="sr-only">
				Email address
			</label>
			<input
				type="email"
				name="email"
				ref={register}
				className="form-control"
				placeholder="Email address"
				required
				// autofocus
			/>
			<label htmlFor="password" className="sr-only">
				Password
			</label>
			<input
				type="password"
				name="password"
				ref={register}
				className="form-control"
				placeholder="Password"
				required
			/>

			<button className="btn btn-lg btn-primary btn-block" type="submit">
				Sign in
			</button>
		</form>
	);
};

export default Login;
