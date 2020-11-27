import React, { PropsWithRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

import Wrapper from '../Wrappers';
import { Role } from '../../classes/Role';
import { User } from '../../classes/User';

const UserEdit: React.FC<{ match: PropsWithRef<any> }> = ({ match }) => {
	let id = 0;

	const { register, handleSubmit } = useForm();
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState<any>();

	const getRoles = async () => {
		const resp = await Axios.get('roles');
		const getUser = await Axios.get(`users/${id}`);

		const user: User = getUser.data.data;

		setUsers(user);

		setRoles(resp.data.data);
	};

	useEffect(() => {
		id = match.params.id;
		getRoles();
		console.log('id', id);
	}, []);

	const onSubmit = async (data: any) => {
		// const request = await Axios.post('users', data);
		// setRedirect(true);
		// console.log(request);
	};

	console.log('userss', users);

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
							value={users?.first_name || ''}
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
							value={users?.last_name || ''}
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
						value={users?.email || ''}
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
							value={users?.role.id || ''}
							// onChange={() => setRoles(users.role.id)}
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

export default UserEdit;
