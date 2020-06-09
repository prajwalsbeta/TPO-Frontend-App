import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeTable from './components/HomeComponents/home-table.component';
import { tableData as approve_students_data } from '../redux/approve_students/approve.students.tabledata';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		textAlign: 'center',
	},
	title: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	head: {
		backgroundColor: 'rgba(1,57,152,0.5)',
		color: '#FFF',
	},
}));

function Home(props) {
	const { container } = props;
	const classes = useStyles();

	return (
		<React.Fragment>
			<HomeTable
				title="Pending Registration Verifications - Students"
				linkTo="/approve-students"
				columns={approve_students_data.columns}
				data={approve_students_data.data}
			/>
			<HomeTable
				title="Pending Registration Verifications - Companies"
				linkTo="/approve-company"
				columns={approve_students_data.columns}
				data={approve_students_data.data}
			/>
			<HomeTable
				title="Campus Placement Requests"
				linkTo="/approve-date"
				columns={approve_students_data.columns}
				data={approve_students_data.data}
			/>
			<HomeTable
				title="Upcoming Campus Placements"
				linkTo="/upcoming-placements"
				columns={approve_students_data.columns}
				data={approve_students_data.data}
			/>
		</React.Fragment>
	);
}

export default Home;
