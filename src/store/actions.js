import {
	CREATE_POST,
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_ALERT,
	HIDE_ALERT,
	REQUEST_POSTS,
	CHANGE_PRIVATE,
	DELETE_POST,
} from './types';

export function changePrivate() {
	return {
		type: CHANGE_PRIVATE,
	};
}

export function createPost(post) {
	return {
		type: CREATE_POST,
		payload: post,
	};
}

export function showLoader() {
	return {
		type: SHOW_LOADER,
	};
}

export function hideLoader() {
	return {
		type: HIDE_LOADER,
	};
}

export function showAlert(text) {
	return (dispatch) => {
		dispatch({
			type: SHOW_ALERT,
			payload: text,
		});
		setTimeout(() => {
			dispatch(hideAlert());
		}, 3000);
	};
}

export function hideAlert() {
	return {
		type: HIDE_ALERT,
	};
}

export function requestPosts() {
	return {
		type: REQUEST_POSTS,
	};
}

export function deletePost(id) {
	return {
		type: DELETE_POST,
		payload: id,
	};
}
