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
	Backdrop,
	CircularProgress,
	Snackbar,
} from '@material-ui/core';
import Alert from '../components/ErrorAlert';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectViewDateDialogStatus,
	selectUnapprovedTableData,
	selectRejectDateDialogStatus,
	selectLoading,
	selectTableModified,
	selectError,
	selectViewApprovedTableData,
	selectdateData,
} from '../redux/approve-date/approve.date.selectors';
import {
	toggleViewApproveDateDialog,
	toggleRejectDateDialog,
	fetchApproveDateTable,
	fetchPendingDateTable,
	rejectApproveDate,
	putApproveDate,
} from '../redux/approve-date/approve.date.actions';
const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#229',
	},
}));

function ApproveDate(props) {
	const {
		viewDateDialogStatus,
		unapprovedTableData,
		approvedTableData,
		toggleViewApproveDateDialog,
		rejectDateDialogStatus,
		toggleRejectDateDialog,
		loading,
		fetchApproveDateTable,
		fetchPendingDateTable,
		putApproveDate,
		tableModified,
		error,
		rejectApproveDate,
		dateData,
	} = props;

	const classes = useStyles();
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	useEffect(() => {
		fetchApproveDateTable();
		fetchPendingDateTable();
	}, [tableModified]);
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
							toggleViewApproveDateDialog(rowData);
						},
					},
					{
						icon: 'refresh',
						tooltip: 'Refresh',
						isFreeAction: true,
						onClick: () => fetchApproveDateTable(),
					},
				]}
				data={unapprovedTableData.data}
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
				onRowClick={(event, rowData) => {
					toggleViewApproveDateDialog(rowData);
				}}
			/>
			<MaterialTable
				title="Pending Date List"
				columns={unapprovedTableData.columns}
				data={approvedTableData.data}
				actions={[
					{
						icon: 'refresh',
						tooltip: 'Refresh',
						isFreeAction: true,
						onClick: () => fetchPendingDateTable(),
					},
				]}
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
			{/**This is for the Popup generated on clicking Date for details
			 * #TODO handel edit and save
			 */}
			<Dialog
				open={viewDateDialogStatus}
				onClose={() => {
					toggleViewApproveDateDialog(dateData);
				}}
				aria-labelledby="Date-view-title"
				fullWidth
			>
				<DialogTitle id="form-dialog-title">Company Date Request</DialogTitle>
				<DialogContent>
					<DialogContent>
						<Typography>
							<b>Requested Date:</b>
							{dateData.c_date}
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography>
							<b>Phase :</b>
							{` ${dateData.phase}`}
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography>
							<b>Phase Details:</b>
							{` ${dateData.phase}`}
						</Typography>
					</DialogContent>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => toggleViewApproveDateDialog(dateData)} color="primary" disabled={loading}>
						Cancel
					</Button>
					<Button
						onClick={() => putApproveDate(dateData._id, dateData.phase)}
						color="primary"
						disabled={loading}
					>
						Approve
					</Button>
					<Button onClick={() => toggleRejectDateDialog(dateData)} color="primary" disabled={loading}>
						Suggest New
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog
				open={rejectDateDialogStatus}
				onClose={() => toggleRejectDateDialog(dateData)}
				aria-labelledby="Date-view-title"
				fullWidth
			>
				<DialogTitle id="Dialogue-reject">Suggest a new date:</DialogTitle>
				<DialogContent>
					<Grid container justify="space-around">
						<Grid item xs={6}>
							<Typography>
								<b>Requested Date:</b>
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography>{dateData.c_date}</Typography>
						</Grid>
					</Grid>
				</DialogContent>
				<form onSubmit={() => rejectApproveDate(dateData._id, dateData.phase, selectedDate)}>
					<DialogContent>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid container justify="space-around">
								<Grid item xs={6} padding={'10px'}>
									<Typography>
										<b>Suggest new Date:</b>
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<KeyboardDatePicker
										format="dd/MM/yyyy"
										margin="normal"
										id="date-picker"
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
					<DialogActions>
						<Button onClick={() => toggleRejectDateDialog()} color="primary" disabled={loading}>
							Cancel
						</Button>
						<Button type="submit" color="primary" disabled={loading}>
							Submit
						</Button>
					</DialogActions>
				</form>
			</Dialog>

			<Snackbar
				open={error != ''}
				autoHideDuration={10000}
				anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
			>
				<Alert severity="error">{error}</Alert>
			</Snackbar>

			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</React.Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	viewDateDialogStatus: selectViewDateDialogStatus,
	unapprovedTableData: selectUnapprovedTableData,
	rejectDateDialogStatus: selectRejectDateDialogStatus,
	approvedTableData: selectViewApprovedTableData,
	loading: selectLoading,
	tableModified: selectTableModified,
	error: selectError,
	dateData: selectdateData,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewApproveDateDialog: (id) => dispatch(toggleViewApproveDateDialog(id)),
	toggleRejectDateDialog: (id) => dispatch(toggleRejectDateDialog(id)),
	fetchApproveDateTable: () => dispatch(fetchApproveDateTable()),
	fetchPendingDateTable: () => dispatch(fetchPendingDateTable()),
	putApproveDate: (id, title) => dispatch(putApproveDate(id, title)),
	rejectApproveDate: (id, title, date) => dispatch(rejectApproveDate(id, title, date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApproveDate);
