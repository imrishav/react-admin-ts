import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Wrapper from '../Wrappers';
import { User } from '../../classes/User';
import { Link } from 'react-router-dom';

// interface IState {
// 	data: any[];
// 	links: any;
// 	meta: any;
// }

const Users = () => {
	const [users, setUsers] = useState<any[]>([]);
	let [page, setPage] = useState(1);
	let [lastPage, setLastPage] = useState(0);

	const getUsers = async () => {
		const res = await Axios.get(`users?page=${page}`);
		setUsers(res.data.data);
		setLastPage(res.data.meta.last_page);
	};

	useEffect(() => {
		getUsers();
	}, []);

	const onNext = async () => {
		if (page === lastPage) return;
		setPage(page++);
		await getUsers();
	};

	const onPrev = async () => {
		// if (page === 1) return;

		setPage(page--);
		await getUsers();
	};

	const handleDelete = async (id: number) => {
		if (window.confirm('Are you sure?')) {
			await Axios.delete(`users/${id}`);

			// setUsers(users?.data.filter((u: User) => u.id !== id));
			setUsers(users.filter((u: User) => u.id !== id));
		}
	};

	console.log('hit//', users);
	return (
		<Wrapper>
			{' '}
			<div className="d-flex justify-content-start flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<div className="btn-toolbar mb-2 mb-md-0">
					<div className="btn-group mr-2">
						<button
							type="button"
							className="btn btn-sm btn-outline-secondary"
						>
							<Link to={'users/add'}>Add User</Link>
						</button>
					</div>
				</div>
			</div>
			<h1 className="h2">Users</h1>
			<div className="table-responsive">
				<table className="table table-striped table-sm">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Action</th>
						</tr>
					</thead>
					{users &&
						users.map((user: User) => {
							return (
								<tbody key={user.id}>
									<tr>
										<td>{user.id}</td>
										<td>
											{user.first_name} {user.last_name}
										</td>
										<td>{user.email}</td>
										<td>{user.role.name}</td>
										<td>
											<div className="btn-group mr-2">
												<Link
													to={`users/${user.id}/edit`}
													className="btn btn-sm btn-outline-secondary"
												>
													Edit
												</Link>
												<button
													type="button"
													className="btn btn-sm btn-outline-secondary"
													onClick={() =>
														handleDelete(user.id)
													}
												>
													Delete
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							);
						})}
				</table>
			</div>
			<nav>
				<ul className="pagination">
					<li className="page-item">
						<button className="page-link" onClick={() => onPrev()}>
							Previous
						</button>
					</li>
					<li className="page-item">
						<button className="page-link" onClick={() => onNext()}>
							Next
						</button>
					</li>
				</ul>
			</nav>
		</Wrapper>
	);
};

export default Users;
