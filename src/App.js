import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CollegeAdmin from './CollegeAdmin/CollegeAdmin';
import Company from './Company/Company';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	const [userRole, setUserRole] = useState('admin');

	return (
		<div>
			<CssBaseline /> {/*This is to normailze the CSS (Builtin component)*/}
			<Router>{userRole == 'admin' ? <CollegeAdmin /> : <Company />}</Router>
		</div>
	);
}

export default App;
