import React, { useState } from 'react';
import './public.css';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

interface IFormInput {
	first_name: String;
	last_name: String;
	email: String;
	password: String;
}

const Register = () => {
	const { register, handleSubmit } = useForm<IFormInput>();
	const [redirect, setRedirect] = useState(false);

	const onSubmit = async (data: IFormInput) => {
		const request = await Axios.post('register', data);

		setRedirect(true);

		console.log(request);
	};

	return redirect ? (
		<Redirect to="/login" />
	) : (
		<form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
			{/* <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> */}
			<h1 className="h3 mb-3 font-weight-normal">Register Here</h1>
			<label htmlFor="first_name" className="sr-only">
				Fist Name
			</label>
			<input
				type="text"
				// id="inputName"
				name="first_name"
				className="form-control"
				placeholder="First Name"
				required
				ref={register}
				// autofocus
			/>
			<label htmlFor="last_name" className="sr-only">
				Last Name
			</label>
			<input
				type="text"
				name="last_name"
				className="form-control"
				placeholder="Last Name"
				required
				ref={register}

				// autofocus
			/>
			<label htmlFor="email" className="sr-only">
				Email address
			</label>
			<input
				type="email"
				name="email"
				// id="inputEmail"
				className="form-control"
				placeholder="Email address"
				required
				ref={register}

				// autofocus
			/>
			<label htmlFor="password" className="sr-only">
				Password
			</label>
			<input
				type="password"
				name="password"
				// id="inputPassword"
				className="form-control"
				placeholder="Password"
				required
				ref={register}
			/>
			<label htmlFor="password_confirm" className="sr-only">
				Confirm Password
			</label>
			<input
				type="password"
				name="password_confirm"
				className="form-control"
				placeholder="Confirm Password"
				required
				ref={register}
			/>

			<button className="btn btn-lg btn-primary btn-block" type="submit">
				Sign Up
			</button>
		</form>
	);
};

export default Register;
