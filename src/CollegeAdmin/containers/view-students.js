import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import {
	Typography,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Backdrop,
	CircularProgress,
	Snackbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectTableData,
	selectDialogOpen,
	selectLoading,
	selectStudentData,
	selectError,
} from '../redux/view-students/view.students.selectors';
import {
	openViewStudentDialog,
	toggleViewStudentDialog,
	fetchViewStudentTable,
	fetchViewStudent,
} from '../redux/view-students/view.students.actions';
import Alert from '../components/ErrorAlert';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#229',
	},
}));

function ViewStudents(props) {
	const classes = useStyles();
	const {
		tableData,
		dialog_open,
		toggleViewStudentDialog,
		loading,
		fetchViewStudentTable,
		studentData,
		fetchViewStudent,
		error,
	} = props;

	/**
	 * Thid func crates the rows of table
	 * @param {string} class_
	 * @param {sring} board
	 * @param {*} year
	 * @param {float} percentage
	 */

	/****TODO add URL and setTableData */
	// useEffect(()=>{
	// 	axios.get('URL')
	// 	.then(response=>{
	// 		console.log(response);
	// 	})
	// 	.catch(err=>{
	// 		console.error(err);
	// 	});
	// },[])

	useEffect(() => {
		fetchViewStudentTable();
	}, []);

	return (
		<React.Fragment>
			<MaterialTable
				title="Student Details"
				columns={tableData.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View details',
						onClick: (event, rowData) => {
							fetchViewStudent(rowData._id);
						},
					},
					{
						icon: 'refresh',
						tooltip: 'Refresh Data',
						isFreeAction: true,
						onClick: () => fetchViewStudentTable(),
					},
				]}
				data={tableData.data}
				options={{
					grouping: true,
					headerStyle: {
						backgroundColor: '#01579b',
						color: '#FFF',
					},
					actionsColumnIndex: -1,
					filtering: true,
					exportButton: true,
				}}
			/>
			{/**This is for the Popup generated on clicking student for details
			 * #TODO handel edit and save
			 */}
			<Dialog
				open={dialog_open}
				onClose={() => toggleViewStudentDialog()}
				aria-labelledby="student-view-title"
				maxWidth="md"
				fullWidth
				disableEnforceFocus
			>
				<DialogTitle id="form-dialog-title">Student Details</DialogTitle>
				<DialogContent>
					<DialogContent>
						<Typography variant="h5" gutterBottom>
							Personal Details:
						</Typography>
					</DialogContent>
					<DialogContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
						<div>
							<Typography>
								<b>Name:</b>
								{` ${studentData.full_name}`}
							</Typography>
							<Typography>
								<b>E-mail:</b>
								{` ${studentData.email}`}
							</Typography>
							<Typography>
								<b>Mobile No:</b>
								{` ${studentData.mobile}`}
							</Typography>
							<Typography>
								<b>Gender:</b>
								{` ${studentData.gender}`}
							</Typography>
							<Typography>
								<b>Age:</b>
								{` ${studentData.age}`}
							</Typography>
							<Typography>
								<b>Address:</b>
								{` ${studentData.address}`}
							</Typography>
						</div>
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							// src = {studentData.photograph_url}
							style={{ width: '30%', height: '30%' }}
						/>
					</DialogContent>
					<DialogContent>
						<Typography variant="h5" gutterBottom>
							Current Class Details:
						</Typography>
						<Typography>
							<b>Department:</b>
							{` ${studentData.department}`}
						</Typography>
						<Typography>
							<b>Class:</b>
							{` ${studentData.class}`}
						</Typography>
						<Typography>
							<b>Roll No:</b>
							{` ${studentData.roll_number}`}
						</Typography>
						<Typography>
							<b>Average Marks:</b>
							{` ${studentData.avg_marks.$numberDecimal}`}
						</Typography>
						<Typography>
							<b>Live Backlock:</b>
							{studentData.live_backlog ? 'Yes' : 'No'}
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography variant="h5" gutterBottom>
							Acadamic Details:
						</Typography>
						<TableContainer component={Paper}>
							<Table size="small" aria-label="acadamic-table">
								<TableHead>
									<TableRow key={'table-heading-vs1'}>
										<TableCell>Class</TableCell>
										<TableCell>Board</TableCell>
										<TableCell>Year of Passing</TableCell>
										<TableCell>Percentage</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{studentData.other_qualifications.map((row) => (
										<TableRow key={`${row.class}1`}>
											<TableCell>{row.class}</TableCell>
											<TableCell>{row['board/university']}</TableCell>
											<TableCell>{row.year_of_passing}</TableCell>
											<TableCell>{row.percentage.$numberDecimal}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</DialogContent>

					<DialogContent>
						<Typography variant="h5" gutterBottom>
							{' '}
							Extracurricular Activities:
						</Typography>
						<TableContainer component={Paper}>
							<Table size="small" aria-label="acadamic-table">
								<TableHead>
									<TableRow key={'extra-heading-vs1'}>
										<TableCell>Title</TableCell>
										<TableCell>Description</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{studentData.extra_activities.map((row, i) => (
										<TableRow key={`${i}`}>
											<TableCell>{row.title}</TableCell>
											<TableCell>{row.description}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</DialogContent>

					<DialogContent>
						<Typography variant="h5" gutterBottom>
							{' '}
							Projects:
						</Typography>
						<TableContainer component={Paper}>
							<Table size="small" aria-label="acadamic-table">
								<TableHead>
									<TableRow key={'table-heading-vs1'}>
										<TableCell>Title</TableCell>
										<TableCell>Description</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{studentData.projects.map((row, i) => (
										<TableRow key={`${i}2`}>
											<TableCell>{row.title}</TableCell>
											<TableCell>{row.description}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</DialogContent>

					<DialogContent>
						<Typography>
							<b>Apply for Placements:</b>
							{studentData.choice_to_avail_placements == true ? `Yes` : `No`}
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography>
							<b>Status:</b> {` ${studentData.status}`}
						</Typography>
					</DialogContent>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => toggleViewStudentDialog()} color="primary">
						OK
					</Button>
					{/* <Button onClick={() => toggleViewStudentDialog()} color="primary">
						Edit
					</Button> */}
				</DialogActions>
			</Dialog>

			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress color="inherit" />
			</Backdrop>
			<Snackbar
				open={error != ''}
				autoHideDuration={6000}
				anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
			>
				<Alert severity="error">{error}</Alert>
			</Snackbar>
		</React.Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	tableData: selectTableData,
	dialog_open: selectDialogOpen,
	loading: selectLoading,
	studentData: selectStudentData,
	error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewStudentDialog: () => dispatch(toggleViewStudentDialog()),
	fetchViewStudentTable: () => dispatch(fetchViewStudentTable()),
	fetchViewStudent: (id) => dispatch(fetchViewStudent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewStudents);
