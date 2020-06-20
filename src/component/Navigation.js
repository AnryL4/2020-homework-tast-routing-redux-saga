import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
	<nav>
		<ul className='navigation'>
			<li>
				<NavLink
					className='link-home'
					to='/'
					exact
					activeClassName='active'
				>
					Main
				</NavLink>
			</li>
			<li>
				<NavLink
					className='link-home'
					to='/posts'
					activeClassName='active'
				>
					Posts
				</NavLink>
			</li>
			<li>
				<NavLink
					className='link-home'
					to='/private'
					activeClassName='active'
				>
					Private
				</NavLink>
			</li>
		</ul>
	</nav>
);
