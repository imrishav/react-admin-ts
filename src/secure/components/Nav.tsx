import React from 'react';
import { useHistory } from 'react-router-dom';

const Nav = () => {
	const history = useHistory();

	const handleLogout = () => {
		localStorage.clear();

		history.push('/login');
	};
	return (
		<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
			<a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
				Company name
			</a>

			<ul className="navbar-nav px-3">
				<li className="nav-item text-nowrap">
					<a
						className="nav-link"
						href="#"
						onClick={() => handleLogout()}
					>
						Sign out
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
