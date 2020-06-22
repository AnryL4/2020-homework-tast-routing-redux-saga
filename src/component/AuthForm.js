import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaChangePrivate, showAlert, hideAlert } from '../store/actions';
import AlertLogin from './AlertLogin';

export const AuthForm = () => {
	const dispatch = useDispatch();

	const { isAuth, alertLogin } = useSelector((state) => state.app);

	useEffect(() => {
		const timerHideAlert = setTimeout(() => {
			dispatch(hideAlert('alertLogin'));
		}, 3000);
		return () => clearTimeout(timerHideAlert);
	}, [alertLogin, dispatch]);

	const [input, changeInput] = useState({
		login: '',
		password: '',
		rememberMe: false,
	});

	const changeInputHandler = useCallback((event) => {
		event.persist();
		const input = event.target;
		const value = input.type === 'checkbox' ? input.checked : input.value;
		changeInput((state) => ({
			...state,
			[input.name]: value,
		}));
	}, []);

	const submitHandler = (event) => {
		event.preventDefault();
		if (isAuth) {
			console.log('Выход из системы');
			dispatch(sagaChangePrivate());
			localStorage.removeItem('rememberMe');
			return;
		}
		if (input.login !== 'admin' || input.password !== 'pass') {
			console.log('Отказано в авторизации, неверные данные');
			dispatch(
				showAlert(
					'Отказано в авторизации, неверные данные',
					'alertLogin'
				)
			);
			changeInput((state) => ({
				...state,
				login: '',
				password: '',
			}));
			return;
		}
		if (input.rememberMe) {
			localStorage.setItem(
				'rememberMe',
				JSON.stringify(input.rememberMe)
			);
		} else {
			localStorage.removeItem('rememberMe');
		}
		dispatch(sagaChangePrivate());
		console.log('Авторизация');
		changeInput((state) => ({
			...state,
			login: '',
			password: '',
		}));
	};

	const inLoginForm = (
		<>
			<p>Войти в систему</p>
			<input
				type='text'
				placeholder='Введите логин'
				className='form-control'
				name='login'
				onChange={changeInputHandler}
				value={input.login}
			/>
			<input
				type='password'
				placeholder='Введите пароль'
				className='form-control'
				name='password'
				onChange={changeInputHandler}
				value={input.password}
			/>
			<div className='form-check'>
				<input
					type='checkbox'
					className='form-check-input'
					id='exampleCheck1'
					checked={input.rememberMe}
					onChange={changeInputHandler}
					name='rememberMe'
				/>
				<label className='form-check-label' htmlFor='exampleCheck1'>
					Запомнить меня?
				</label>
			</div>
			<button
				type='submit'
				className='btn btn-dark'
				style={{ marginBottom: '10px' }}
			>
				Войти
			</button>
		</>
	);

	const outLoginForm = (
		<>
			<p>Выйти из системы</p>
			<button type='submit' className='btn btn-dark'>
				Выйти
			</button>
		</>
	);

	return (
		<div className='form_container'>
			<form className='mysubform' onSubmit={submitHandler}>
				{!isAuth ? inLoginForm : outLoginForm}
				{alertLogin && <AlertLogin text={alertLogin} />}
			</form>
		</div>
	);
};
