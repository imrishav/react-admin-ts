import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Axios from 'axios';

import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';
import { Dashboard } from './secure/Dashboard';
import Users from './secure/Users';
import RedirectDashboard from './secure/components/RedirectDashboard';

Axios.defaults.baseURL = 'http://localhost:8000/api/';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/" exact component={RedirectDashboard} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/users" component={Users} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
			</BrowserRouter>
		</div>
	);
}

export default App;
