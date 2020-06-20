import { takeEvery, put, call, select, delay, take } from 'redux-saga/effects';
import {
	REQUEST_POSTS,
	CREATE_POST,
	FETCH_POSTS,
	SAGA_CHANGE_PRIVATE,
} from './types';
import { showLoader, hideLoader, showAlert, changePrivate } from './actions';

export function* sagaWatcherRequestPosts() {
	yield takeEvery(REQUEST_POSTS, sagaWorker);
}

export function* sagaWatcherCreatePosts() {
	yield takeEvery(CREATE_POST, watchFirstThreeTodosCreation);
}

export function* sagaWatcherLoginFlow() {
	while (true) {
		yield take(SAGA_CHANGE_PRIVATE);
		yield put(changePrivate());

		yield take(SAGA_CHANGE_PRIVATE);
		yield put(changePrivate());
	}
}

function* watchFirstThreeTodosCreation() {
	const Posts = yield select((state) => state.posts.posts);
	console.log(Posts);
	if (!(Posts.length % 3)) {
		yield put(
			showAlert('Вы сами создали 3 поста! Создайте ещё 3 поста!', 'alert')
		);
	}
}

function* sagaWorker() {
	try {
		yield put(showLoader());
		yield delay(500);
		const payload = yield call(fetchPosts);
		yield put({ type: FETCH_POSTS, payload });
		yield put(hideLoader());
	} catch (error) {
		yield put(showAlert('С сервером что-то пошло не так'));
		yield put(hideLoader());
	}
}

async function fetchPosts() {
	const response = await fetch(
		// 'https://jsonplaceholder.typicode.com/posts'
		'https://jsonplaceholder.typicode.com/posts?_limit=5'
	);
	return await response.json();
}
