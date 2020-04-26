import React, { Fragment } from 'react';
import spinner from './loading.gif';
const Spinner = () => <Fragment>
			<img
				src={spinner}
				alt="loading"
				style={{ width: '70px', margin: 'auto', display: 'block' }}
			/>
		</Fragment>


export default Spinner;
