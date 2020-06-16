import { takeEvery, put, call, select, delay } from 'redux-saga/effects';
import { REQUEST_POSTS, CREATE_POST, FETCH_POSTS } from './types';
import { showLoader, hideLoader, showAlert } from './actions';

export function* sagaWatcherRequestPosts() {
	yield takeEvery(REQUEST_POSTS, sagaWorker);
}

export function* sagaWatcherCreatePosts() {
	yield takeEvery(CREATE_POST, watchFirstThreeTodosCreation);
}

// export function* sagaWatcherLoginFlow() {
// 	while(true) {
// 		yield take(LOGIN)
// 		yield put(showAlert('Авторизация'));

// 		yield take(LOGIN)
// 		yield put(showAlert('Выход из аккаунта'));
// 	}
// }

function* watchFirstThreeTodosCreation() {
	const Posts = yield select((state) => state.posts.posts);
	if (!(Posts.length % 3)) {
		yield put(showAlert('Вы сами создали 3 поста! Создайте ещё 3 поста!'));
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
