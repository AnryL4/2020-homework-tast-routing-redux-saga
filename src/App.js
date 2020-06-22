import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.scss';
import { Navigation } from './component/Navigation';
import { AuthForm } from './component/AuthForm';

const App = () => {

	return (
		<Router>
			<div className='container'>
				<div className='row'>
					<header className='header'>
						<h1>react, redux, saga</h1>
					</header>
				</div>
				<div className='row'>
					<div className='col'>
						<Navigation />
					</div>
					<div className='col-10'>
						<Switch>
							{routes.map((route) => {
								return (
									<Route
										key={route.name}
										exact={route.isExact}
										path={route.path}
										component={route.component}
									/>
								);
							})}
							<Redirect to='/' />
						</Switch>
					</div>
				</div>
			</div>

			<AuthForm />
		</Router>
	);
};

export default App;
