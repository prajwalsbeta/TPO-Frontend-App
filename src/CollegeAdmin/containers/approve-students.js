import React, { useState, useEffect } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
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
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@material-ui/core/';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectViewStudentDialogStatus,
	selectTableData,
	selectRejectStudentDialogStatus,
	selectLoading,
	selectStudentData,
	selectTableModified,
	selectError,
} from '../redux/approve_students/approve.students.selectors';
import {
	toggleViewApproveStudentDialog,
	toggleRejectStudentDialog,
	fetchApproveStudentTable,
	fetchApproveStudent,
	putApproveStudent,
	rejectApproveStudent,
} from '../redux/approve_students/approve.students.actions';
import Alert from '../components/ErrorAlert';

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
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#229',
	},
}));

function ApproveStudents(props) {
	const {
		viewStudentDialogStatus,
		tableData,
		toggleViewApproveStudentDialog,
		rejectStudentDialogStatus,
		toggleRejectStudentDialog,
		loading,
		fetchApproveStudentTable,
		studentData,
		fetchApproveStudent,
		putApproveStudent,
		tableModified,
		error,
		rejectApproveStudent,
	} = props;

	function handleChange(event) {
		setReason(event.target.value);
	}
	const classes = useStyles();
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
	const [reason, setReason] = useState('');
	useEffect(() => {
		fetchApproveStudentTable();
	}, [tableModified]);
	return (
		<React.Fragment>
			<Snackbar
				open={error != ''}
				autoHideDuration={6000}
				anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
			>
				<Alert severity="error">{error}</Alert>
			</Snackbar>
			<MaterialTable
				title="Approve Registered Student"
				columns={tableData.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View details',
						onClick: (event, rowData) => {
							fetchApproveStudent(rowData._id);
						},
					},
					{
						icon: 'refresh',
						tooltip: 'Refresh',
						isFreeAction: true,
						onClick: () => fetchApproveStudentTable(),
					},
				]}
				data={tableData.data}
				options={{
					// grouping: true,
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
				open={viewStudentDialogStatus}
				onClose={() => {
					toggleViewApproveStudentDialog();
				}}
				aria-labelledby="student-view-title"
				maxWidth="md"
				fullWidth
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
					<Button onClick={() => toggleViewApproveStudentDialog()} color="primary" disabled={loading}>
						Cancel
					</Button>
					<Button onClick={() => putApproveStudent(studentData._id)} color="primary" disabled={loading}>
						Approve
					</Button>
					<Button onClick={() => toggleRejectStudentDialog()} color="primary" disabled={loading}>
						Reject
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog
				open={rejectStudentDialogStatus}
				onClose={() => toggleRejectStudentDialog()}
				aria-labelledby="student-view-title"
				fullWidth
			>
				<DialogTitle id="Dialogue-reject">Reason to Reject</DialogTitle>
				<div style={{ margin: '20px' }}>
					<form>
						<TextField
							id="reject-text"
							label="Reason to reject"
							multiline
							rows={12}
							placeholder="Enter reason to reject"
							variant="filled"
							fullWidth
							required
							onChange={handleChange}
						/>
					</form>
				</div>
				<DialogActions>
					<Button onClick={() => toggleRejectStudentDialog()} color="primary">
						Cancel
					</Button>
					<Button
						onClick={() => {
							rejectApproveStudent(studentData._id, reason);
						}}
						color="primary"
					>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</React.Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	viewStudentDialogStatus: selectViewStudentDialogStatus,
	tableData: selectTableData,
	rejectStudentDialogStatus: selectRejectStudentDialogStatus,
	loading: selectLoading,
	studentData: selectStudentData,
	tableModified: selectTableModified,
	error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewApproveStudentDialog: () => dispatch(toggleViewApproveStudentDialog()),
	toggleRejectStudentDialog: () => dispatch(toggleRejectStudentDialog()),
	fetchApproveStudentTable: () => dispatch(fetchApproveStudentTable()),
	fetchApproveStudent: (id) => dispatch(fetchApproveStudent(id)),
	putApproveStudent: (id) => dispatch(putApproveStudent(id)),
	rejectApproveStudent: (id, r) => dispatch(rejectApproveStudent(id, r)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApproveStudents);
