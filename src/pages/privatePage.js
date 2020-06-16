import React from 'react';
import { useSelector } from 'react-redux';

export const PrivatePage = () => {
	const isPrivate = useSelector((state) => {
		return state.app.isPrivate;
	});

	const outLogin = (
		<p>Содержимое доступно только авторизированным пользователям</p>
	);

	const inLogin = <p>Секрет...</p>;

	return (
		<div className='panel'>
			<div className='content'>
				<h2>Приват</h2>
				{isPrivate ? inLogin : outLogin}
			</div>
		</div>
	);
};
