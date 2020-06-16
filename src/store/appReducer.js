import {
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_ALERT,
	HIDE_ALERT,
	CHANGE_PRIVATE,
} from './types';

const initialState = {
	loading: false,
	alert: null,
	isPrivate: localStorage.getItem('rememberMe'),
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return { ...state, loading: true };
		case HIDE_LOADER:
			return { ...state, loading: false };
		case SHOW_ALERT:
			return { ...state, alert: action.payload };
		case HIDE_ALERT:
			return { ...state, alert: null };
		case CHANGE_PRIVATE:
			return { ...state, isPrivate: !state.isPrivate };
		default:
			return state;
	}
};
