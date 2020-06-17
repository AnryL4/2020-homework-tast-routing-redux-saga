import React from 'react';
import { useDispatch } from 'react-redux';
import { hideAlert } from '../store/actions';

const AlertLogin = ({ text }) => {
	const dispatch = useDispatch();

	return (
		<div
			className='alert alert-danger fade show'
			role='alert'
			onClick={() => {
				dispatch(hideAlert('alertLogin'));
			}}
		>
			{text}
		</div>
	);
};

export default React.memo(AlertLogin);
