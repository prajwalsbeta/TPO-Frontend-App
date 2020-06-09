import React, { useState, useEffect } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@material-ui/core/';
import VisibilityIcon from '@material-ui/icons/Visibility';

//Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectViewCompanyDialogStatus,
	selectTableData,
	selectRejectCompanyDialogStatus,
} from '../redux/approve-company/approve.company.selectors';
import {
	toggleViewApproveCompanyDialog,
	toggleRejectCompanyDialog,
} from '../redux/approve-company/approve.company.actions';
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

function ApproveCompany(props) {
	const {
		viewCompanyDialogStatus,
		tableData,
		toggleViewApproveCompanyDialog,
		rejectCompanyDialogStatus,
		toggleRejectCompanyDialog,
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
				title="Approve Company Registrations"
				columns={tableData.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View details',
						onClick: (event, rowData) => {
							toggleViewApproveCompanyDialog();
						},
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
			{/**This is for the Popup generated on clicking Company for details
			 * #TODO handel edit and save
			 */}
			<Dialog
				open={viewCompanyDialogStatus}
				onClose={() => {
					toggleViewApproveCompanyDialog();
				}}
				aria-labelledby="Company-view-title"
				fullWidth
			>
				<DialogTitle id="form-dialog-title">Company Details</DialogTitle>
				<DialogContent>
					<Typography>Company Name:</Typography>
					<Typography>Email-id:</Typography>
					<Typography>Concerened Person Name:</Typography>
					<Typography>Mobile No.:</Typography>
					<Typography>Address:</Typography>
				</DialogContent>
				<DialogContent>
					<Typography variant="h6">Requirement Details:</Typography>
					<Typography>Number of Students:</Typography>
					<Typography>Interval of Requirement:</Typography>
					<Typography>Cutoff:</Typography>
					<Typography>Live Backlog:</Typography>
				</DialogContent>
				<DialogContent>
					<Typography variant="h6">Phase Details:</Typography>
					<Typography>Phase 1:</Typography>
					<Typography>Phase 2:</Typography>
					<Typography>Phase 3:</Typography>
				</DialogContent>
				<DialogContent>
					<Typography variant="h6">Placements dates:</Typography>
					<Typography>Phase 1:</Typography>
					<Typography>Phase 2:</Typography>
					<Typography>Phase 3:</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => toggleViewApproveCompanyDialog()} color="primary">
						Cancel
					</Button>
					<Button onClick={() => toggleViewApproveCompanyDialog()} color="primary">
						Approve
					</Button>
					<Button onClick={() => toggleRejectCompanyDialog()} color="primary">
						Reject
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog
				open={rejectCompanyDialogStatus}
				onClose={() => toggleRejectCompanyDialog()}
				aria-labelledby="Company-view-title"
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
					<Button onClick={() => toggleRejectCompanyDialog()} color="primary">
						Cancel
					</Button>
					<Button
						onClick={() => {
							toggleViewApproveCompanyDialog();
							toggleRejectCompanyDialog();
						}}
						color="primary"
					>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	viewCompanyDialogStatus: selectViewCompanyDialogStatus,
	tableData: selectTableData,
	rejectCompanyDialogStatus: selectRejectCompanyDialogStatus,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewApproveCompanyDialog: () => dispatch(toggleViewApproveCompanyDialog()),
	toggleRejectCompanyDialog: () => dispatch(toggleRejectCompanyDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApproveCompany);
