import React, { useState, useEffect } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@material-ui/core/';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';

import CustomDialog from './components/custom-dialog.component';

//Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectViewStudentDialogStatus,
	selectTableData,
	selectRejectStudentDialogStatus,
} from '../redux/approve_students/approve.students.selectors';
import {
	toggleViewApproveStudentDialog,
	toggleRejectStudentDialog,
} from '../redux/approve_students/approve.students.actions';
//Redux

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
}));

function ApproveStudents(props) {
	const {
		viewStudentDialogStatus,
		tableData,
		toggleViewApproveStudentDialog,
		rejectStudentDialogStatus,
		toggleRejectStudentDialog,
	} = props;

	/**
	 * Thid func crates the rows of table
	 * @param {string} class_
	 * @param {sring} board
	 * @param {*} year
	 * @param {float} percentage
	 */
	function createData(class_, board, year, percentage) {
		return { class_, board, year, percentage };
	}

	const rows = [createData('10th', 'SSC', '2015', '90')];

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

	return (
		<React.Fragment>
			<MaterialTable
				title="Approve Registered Student"
				columns={tableData.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View details',
						onClick: (event, rowData) => {
							toggleViewApproveStudentDialog();
						},
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
				fullWidth
			>
				<DialogTitle id="form-dialog-title">Name</DialogTitle>
				<DialogContent>
					<Typography variant="h6">Personal Details:</Typography>
					<DialogContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
						<div>
							<Typography>Name</Typography>
							<Typography>E-mail:</Typography>
							<Typography>Mobile No:</Typography>
						</div>
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							style={{ width: '30%', height: '30%' }}
						/>
					</DialogContent>
					<DialogContent>
						<Typography variant="h6">Class Details:</Typography>
						<Typography>Department:</Typography>
						<Typography>Class:</Typography>
						<Typography>Roll No:</Typography>
					</DialogContent>
					<DialogContent>
						<Typography variant="h6">Acadamic Details:</Typography>
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
									{rows.map((row) => (
										<TableRow key={`${row.class}1`}>
											<TableCell>{row.class_}</TableCell>
											<TableCell>{row.board}</TableCell>
											<TableCell>{row.year}</TableCell>
											<TableCell>{row.percentage}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</DialogContent>
					<DialogContent>
						<Typography>Apply for Placements:</Typography>
					</DialogContent>
					<DialogContent>
						<Typography>Status:</Typography>
					</DialogContent>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => toggleViewApproveStudentDialog()} color="primary">
						Cancel
					</Button>
					<Button onClick={() => toggleViewApproveStudentDialog()} color="primary">
						Approve
					</Button>
					<Button onClick={() => toggleRejectStudentDialog()} color="primary">
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
					<TextField
						id="filled-multiline-static"
						label="Reason to reject"
						multiline
						rows={12}
						placeholder="Enter reason to reject"
						variant="filled"
						fullWidth
					/>
				</div>
				<DialogActions>
					<Button onClick={() => toggleRejectStudentDialog()} color="primary">
						Cancel
					</Button>
					<Button onClick={() => toggleRejectStudentDialog()} color="primary">
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	viewStudentDialogStatus: selectViewStudentDialogStatus,
	tableData: selectTableData,
	rejectStudentDialogStatus: selectRejectStudentDialogStatus,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewApproveStudentDialog: () => dispatch(toggleViewApproveStudentDialog()),
	toggleRejectStudentDialog: () => dispatch(toggleRejectStudentDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApproveStudents);
