import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Axios from 'axios';

import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';
import { Dashboard } from './secure/Dashboard';
import Users from './secure/users/Users';
import RedirectDashboard from './secure/components/RedirectDashboard';
import UserCreate from './secure/users/Users-create';
import UserEdit from './secure/users/User-edit';

Axios.defaults.baseURL = 'http://localhost:8000/api/';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/" exact component={RedirectDashboard} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/users" component={Users} exact />
				<Route path="/users/add" component={UserCreate} />
				<Route path="/users/:id/edit" component={UserEdit} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
			</BrowserRouter>
		</div>
	);
}

export default App;
