import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
	<nav>
		<ul className='navigation'>
			<li>
				<Link className='link-home' to='/'>
					Main
				</Link>
			</li>
			<li>
				<Link className='link-home' to='/posts'>
					Posts
				</Link>
			</li>
			<li>
				<Link className='link-home' to='/private'>
					Private
				</Link>
			</li>
		</ul>
	</nav>
);
