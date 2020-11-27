import React, { useEffect, useState } from 'react';
import Wrapper from '../Wrappers';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { Role } from '../../classes/Role';
import { useHistory } from 'react-router-dom';

const UserCreate = () => {
	const historyy = useHistory();

	const { register, handleSubmit } = useForm();
	const [roles, setRoles] = useState([]);

	const getRoles = async () => {
		const resp = await Axios.get('roles');
		setRoles(resp.data.data);
	};

	useEffect(() => {
		getRoles();
	}, []);

	const onSubmit = async (data: any) => {
		const request = await Axios.post('users', data);
		historyy.push('/users');
		// setRedirect(true);

		console.log(request);
	};
	return (
		<Wrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="first_name">First Name</label>
						<input
							type="text"
							className="form-control"
							name="first_name"
							id="inputEmail4"
							ref={register}
							placeholder="First Name"
						/>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="last_name">Last Name</label>
						<input
							type="text"
							className="form-control"
							name="last_name"
							ref={register}
							placeholder="Last Name"
						/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						className="form-control"
						name="email"
						ref={register}
						placeholder="Email"
					/>
				</div>

				<div className="form-row">
					<div className="form-group col-md-4">
						<label htmlFor="inputState">Role</label>
						<select
							name="role_id"
							className="form-control"
							ref={register}
						>
							<option>Choose...</option>
							{roles.map((role: Role) => {
								return (
									<option key={role.id} value={role.id}>
										{role.name}
									</option>
								);
							})}
						</select>
					</div>
				</div>

				<button type="submit" className="btn btn-primary">
					Save User
				</button>
			</form>
		</Wrapper>
	);
};

export default UserCreate;

// <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
// 		{/* <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> */}
// 		<h1 className="h3 mb-3 font-weight-normal">Register Here</h1>
// 		<label htmlFor="first_name" className="sr-only">
// 			Fist Name
// 		</label>
// 		<input
// 			type="text"
// 			// id="inputName"
// 			name="first_name"
// 			className="form-control"
// 			placeholder="First Name"
// 			required
// 			ref={register}
// 			// autofocus
// 		/>
// 		<label htmlFor="last_name" className="sr-only">
// 			Last Name
// 		</label>
// 		<input
// 			type="text"
// 			name="last_name"
// 			className="form-control"
// 			placeholder="Last Name"
// 			required
// 			ref={register}

// 			// autofocus
// 		/>
// 		<label htmlFor="email" className="sr-only">
// 			Email address
// 		</label>
// 		<input
// 			type="email"
// 			name="email"
// 			// id="inputEmail"
// 			className="form-control"
// 			placeholder="Email address"
// 			required
// 			ref={register}

// 			// autofocus
// 		/>

// 		<div className="form-group">
// 			<label>Role</label>
// 			<select name="role_id" className="form-control">
// {roles.map((role: Role) => {
// 	return (
// 		<option key={role.id} value={role.id}>
// 			{role.name}
// 		</option>
// 	);
// })}
// 			</select>
// 		</div>

// 		<button
// 			className="btn btn-lg btn-primary btn-block"
// 			type="submit"
// 		>
// 			Sign Up
// 		</button>
// 	</form>
