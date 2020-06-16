import React from 'react';

export const Loader = React.memo(() => (
	<div className='spinner-border' role='status'>
		<span className='sr-only'>Loading...</span>
	</div>
));
