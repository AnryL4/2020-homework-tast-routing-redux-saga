import React from 'react';
import { useSelector } from 'react-redux';

export const PrivatePage = () => {
	const isPrivate = useSelector((state) => {
		return state.app.isPrivate;
	});

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

	return (
		<div className='panel'>
			<div className='content'>
				<h2>Приват</h2>
				{isPrivate ? inLogin : outLogin}
			</div>
		</div>
	);
};
