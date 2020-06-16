import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../store/actions';

export const Post = React.memo(({ post }) => {
	const dispatch = useDispatch();

	const removePost = () => {
		dispatch(deletePost(post.id));
	};

	return (
		<div className='card' onClick={removePost}>
			<div className='card-body'>
				<h5 className='card-title'>{post.title}</h5>
			</div>
		</div>
	);
});
