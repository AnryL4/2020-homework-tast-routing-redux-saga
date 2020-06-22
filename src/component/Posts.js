import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from './Post';

export const Posts = () => {
	const { posts, fetchedPosts } = useSelector(state => state.posts);

	const generalPosts = [...posts, ...fetchedPosts];
	if (!generalPosts.length) {
		return <p className='text-center'>Постов пока нет</p>;
	}
	return generalPosts.map((post) => <Post post={post} key={post.id} />);
};
