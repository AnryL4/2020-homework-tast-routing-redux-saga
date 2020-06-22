import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	showAlert,
	createPost,
	requestPosts,
	hideAlert,
} from '../store/actions';
import Alert from '../component/Alert';
import { Posts } from '../component/Posts';
import { Loader } from '../component/Loader';

export const FakePostsPage = () => {
	const dispatch = useDispatch();
	const { alert, loading } = useSelector((state) => state.app);
	const [title, setTitle] = useState('');

	useEffect(() => {
		const timerHideAlert = setTimeout(() => {
			dispatch(hideAlert('alert'));
		}, 3000);
		return () => clearTimeout(timerHideAlert);
	}, [alert, dispatch]);

	const submitHandler = (event) => {
		event.preventDefault();
		if (!title.trim()) {
			dispatch(
				showAlert('Запрещено создавать посты без заголовка', 'alert')
			);
			return;
		}
		const newPost = {
			title,
			id: Date.now(),
		};
		dispatch(createPost(newPost));
		setTitle('');
	};

	const changeInputHandler = useCallback((event) => {
		event.persist();
		setTitle(event.target.value);
	}, []);

	const dispatchRequestPosts = () => {
		dispatch(requestPosts());
	};

	return (
		<div className='content'>
			<h1>Посты</h1>
			<form onSubmit={submitHandler}>
				<div className='form-group'>
					<label htmlFor='title'>Заголовок поста</label>
					<input
						type='text'
						className='form-control'
						id='title'
						value={title}
						name='title'
						onChange={changeInputHandler}
					/>
				</div>
				{alert && <Alert text={alert} />}
			</form>
			<div className='buttons'>
				<button
					className='btn btn-success'
					type='submit'
					onClick={submitHandler}
				>
					Создать
				</button>
				<button
					className='btn btn-success'
					type='button'
					onClick={dispatchRequestPosts}
				>
					Загрузить с сервера
				</button>
			</div>
			{loading ? <Loader /> : <Posts />}
		</div>
	);
};
