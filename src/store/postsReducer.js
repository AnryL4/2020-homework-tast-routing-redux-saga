import { CREATE_POST, FETCH_POSTS, DELETE_POST } from './types';

const initialState = {
	posts: [],
	fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_POST:
			return { ...state, posts: [...state.posts, action.payload] };
		case FETCH_POSTS:
			return { ...state, fetchedPosts: action.payload };
		case DELETE_POST:
			return {
				...state,
				posts: [...state.posts].filter(
					(post) => post.id !== action.payload
				),
				fetchedPosts: [...state.fetchedPosts].filter(
					(post) => post.id !== action.payload
				),
			};
		default:
			return state;
	}
};
