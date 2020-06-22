import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
	<nav>
		<ul className='nav flex-column nav-pills nav-fill navigation'>
			<li className='nav-item'>
				<NavLink
					className='nav-link'
					to='/'
					exact
					activeClassName='active'
				>
					Главная
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink
					className='nav-link'
					to='/posts'
					activeClassName='active'
				>
					Посты
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink
					className='nav-link'
					to='/private'
					activeClassName='active'
				>
					Приват
				</NavLink>
			</li>
		</ul>
	</nav>
);
