import React from 'react';
import { useDispatch } from 'react-redux';
import { hideAlert } from '../store/actions';

const Alert = ({ text }) => {
	const dispatch = useDispatch();

	return (
		<div
			className='alert alert-warning alert-dismissible fade show'
			role='alert'
		>
			{text}
			<button
				type='button'
				className='close'
				data-dismiss='alert'
				aria-label='Close'
				onClick={() => {
					dispatch(hideAlert('alert'));
				}}
			>
				<span aria-hidden='true'>&times;</span>
			</button>
		</div>
	);
};

export default React.memo(Alert);
