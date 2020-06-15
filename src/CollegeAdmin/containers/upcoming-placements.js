import React, { useEffect } from 'react';
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
import VisibilityIcon from '@material-ui/icons/Visibility';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectTableData,
	selectDialogOpen,
	selectError,
	selectLoading,
	selectUpcomingData,
} from '../redux/upcoming-placements/view.upcoming.selectors';
import {
	openViewUpcomingDialog,
	toggleViewUpcomingDialog,
	fetchViewUpcomingTable,
} from '../redux/upcoming-placements/view.upcoming.actions';
import Alert from '../components/ErrorAlert';
const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#229',
	},
}));

function UpcomingPlacements(props) {
	const {
		tableData,
		dialog_open,
		toggleViewUpcomingDialog,
		loading,
		fetchViewUpcomingTable,
		error,
		upcomingData,
	} = props;
	const classes = useStyles();
	useEffect(() => {
		fetchViewUpcomingTable();
	}, []);
	return (
		<React.Fragment>
			<MaterialTable
				title="Upcoming Details"
				columns={tableData.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View details',
						onClick: (event, rowData) => {
							toggleViewUpcomingDialog(rowData);
						},
					},
					{
						icon: 'refresh',
						tooltip: 'Refresh Data',
						isFreeAction: true,
						onClick: () => fetchViewUpcomingTable(),
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
				onRowClick={(event, rowData) => {
					toggleViewUpcomingDialog(rowData);
				}}
			/>
			{/**This is for the Popup generated on clicking phase for details
			 * #TODO handel edit and save
			 */}
			<Dialog
				open={dialog_open}
				onClose={() => toggleViewUpcomingDialog(upcomingData)}
				aria-labelledby="Upcoming-view-title"
				// maxWidth="lg"
				fullWidth
				disableEnforceFocus
			>
				<DialogTitle id="form-dialog-title">Upcoming Placement Details</DialogTitle>
				<DialogContent>
					<DialogContent>
						<Typography>
							<b>Company Name:</b>
							{upcomingData.company_name}
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography>
							<b>Date:</b>
							{upcomingData.c_date}
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography>
							<b>Phase :</b>
							{upcomingData.phase_title}
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography>
							<b>Phase Details:</b>
							{upcomingData.phase_title}
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography>
							<b>Requirements Details:</b>
							{upcomingData.requirement}
						</Typography>
					</DialogContent>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => toggleViewUpcomingDialog(upcomingData)} color="primary">
						OK
					</Button>
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
	error: selectError,
	upcomingData: selectUpcomingData,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewUpcomingDialog: (data) => dispatch(toggleViewUpcomingDialog(data)),
	fetchViewUpcomingTable: () => dispatch(fetchViewUpcomingTable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingPlacements);
