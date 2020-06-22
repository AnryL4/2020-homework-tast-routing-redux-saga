import React from 'react';
import { useSelector } from 'react-redux';

const outLogin = (
	<p>Содержимое доступно только авторизированным пользователям</p>
);

const inLogin = (
	<div className='alert alert-success' role='alert'>
		<h4 className='alert-heading'>Секретная информация!</h4>
		<hr />
		<p className='alertP'>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
			nesciunt, voluptate ratione facere quia quis.
		</p>
		<hr />
		<p className='mb-0 alertP'>Lorem ipsum dolor sit.</p>
	</div>
);

export const PrivatePage = () => {
	const isAuth = useSelector(state => state.app.isAuth);

	return (
		<div className='content'>
			<h1>Приватная страница</h1>
			{isAuth ? inLogin : outLogin}
		</div>
	);
};
