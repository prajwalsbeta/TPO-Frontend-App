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
	Grid,
	Divider,
} from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@material-ui/core/';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
//Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectViewDateDialogStatus,
	selectUnapprovedTableData,
	selectRejectDateDialogStatus,
} from '../redux/approve-date/approve.date.selectors';
import { toggleViewApproveDateDialog, toggleRejectDateDialog } from '../redux/approve-date/approve.date.actions';
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

function ApproveDate(props) {
	const {
		viewDateDialogStatus,
		unapprovedTableData,
		toggleViewApproveDateDialog,
		rejectDateDialogStatus,
		toggleRejectDateDialog,
	} = props;

	/**
	 * Thid func crates the rows of table
	 * @param {string} class_
	 * @param {sring} board
	 * @param {*} year
	 * @param {float} percentage
	 */
	const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

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
				title="Unapproved Date List"
				columns={unapprovedTableData.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View details',
						onClick: (event, rowData) => {
							toggleViewApproveDateDialog();
						},
					},
				]}
				data={unapprovedTableData.data}
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
			<MaterialTable
				title="Pending Date List"
				columns={unapprovedTableData.columns}
				data={unapprovedTableData.data}
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
			{/**This is for the Popup generated on clicking Date for details
			 * #TODO handel edit and save
			 */}
			<Dialog
				open={viewDateDialogStatus}
				onClose={() => {
					toggleViewApproveDateDialog();
				}}
				aria-labelledby="Date-view-title"
				fullWidth
			>
				<DialogTitle id="form-dialog-title">Company Date Request</DialogTitle>
				<DialogContent>
					<Typography>Requested Date:</Typography>
				</DialogContent>
				<DialogContent>
					<Typography>Phase :</Typography>
				</DialogContent>
				<DialogContent>
					<Typography>Phase Details:</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => toggleViewApproveDateDialog()} color="primary">
						Cancel
					</Button>
					<Button onClick={() => toggleViewApproveDateDialog()} color="primary">
						Approve
					</Button>
					<Button onClick={() => toggleRejectDateDialog()} color="primary">
						Suggest New
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog
				open={rejectDateDialogStatus}
				onClose={() => toggleRejectDateDialog()}
				aria-labelledby="Date-view-title"
				fullWidth
			>
				<DialogTitle id="Dialogue-reject">Suggest a new date:</DialogTitle>
				<div style={{ margin: '20px' }}>
					<DialogContent>
						<Grid container justify="space-around">
							<Grid item xs={6}>
								<Typography>Requested Date:</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography>19/08/2020</Typography>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogContent>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid container justify="space-around">
								<Grid item xs={6} padding={'10px'}>
									<Typography>Suggest new Date:</Typography>
								</Grid>

								<Grid item xs={6}>
									<KeyboardDatePicker
										disableToolbar
										variant="inline"
										format="dd/MM/yyyy"
										margin="normal"
										id="date-picker-inline"
										label="Suggest a new date"
										value={selectedDate}
										onChange={handleDateChange}
										KeyboardButtonProps={{
											'aria-label': 'change date',
										}}
									/>
								</Grid>
							</Grid>
						</MuiPickersUtilsProvider>
					</DialogContent>
				</div>
				<DialogActions>
					<Button onClick={() => toggleRejectDateDialog()} color="primary">
						Cancel
					</Button>
					<Button
						onClick={() => {
							toggleViewApproveDateDialog();
							toggleRejectDateDialog();
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
	viewDateDialogStatus: selectViewDateDialogStatus,
	unapprovedTableData: selectUnapprovedTableData,
	rejectDateDialogStatus: selectRejectDateDialogStatus,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewApproveDateDialog: () => dispatch(toggleViewApproveDateDialog()),
	toggleRejectDateDialog: () => dispatch(toggleRejectDateDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApproveDate);
