import React from 'react';
import { useDispatch } from 'react-redux';
import { hideAlert } from '../store/actions';

const Alert = ({ text }) => {
	const dispatch = useDispatch();

	return (
		<div
			className='alert alert-warning animate__animated animate__fadeIn animate__faster'
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
