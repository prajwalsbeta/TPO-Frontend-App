import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import {
	Typography,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Card,
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
	selectOngoingData,
} from '../redux/ongoing-placements/view.ongoing.selectors';
import {
	openViewOngoingDialog,
	toggleViewOngoingDialog,
	fetchViewOngoingTable,
} from '../redux/ongoing-placements/view.ongoing.actions';
import Alert from '../components/ErrorAlert';
const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#229',
	},
}));

function OngoingPlacements(props) {
	const {
		tableData,
		dialog_open,
		toggleViewOngoingDialog,
		loading,
		error,
		ongoingData,
		fetchViewOngoingTable,
	} = props;
	const classes = useStyles();
	// useEffect(() => {
	// 	fetchViewOngoingTable();
	// }, []);

	return (
		<React.Fragment>
			<MaterialTable
				title="Ongoing Placement Details"
				columns={tableData.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View details',
						onClick: (event, rowData) => {
							toggleViewOngoingDialog();
						},
					},
					{
						icon: 'refresh',
						tooltip: 'Refresh Data',
						isFreeAction: true,
						onClick: () => fetchViewOngoingTable(),
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
					toggleViewOngoingDialog();
				}}
			/>
			{/**This is for the Popup generated on clicking student for details
			 * #TODO handel edit and save
			 */}
			<Dialog
				open={dialog_open}
				onClose={() => toggleViewOngoingDialog()}
				aria-labelledby="Ongoing-view-title"
				maxWidth="lg"
				fullWidth
				disableEnforceFocus
			>
				<DialogTitle id="form-dialog-title">Ongoing Placement Details</DialogTitle>
				<DialogContent>
					<DialogContent>
						<Typography variant="h6">Company Name:</Typography>
					</DialogContent>
					<Grid container>
						<Grid item xs={6}>
							<Card variant="outlined">
								<DialogContent>
									<Typography variant="h6"> Current Status</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>
										<b>Date:</b>
									</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>
										<b>Phase :</b>
									</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>
										<b>Phase Details:</b>
									</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>
										<b>Requirements Details:</b>
									</Typography>
								</DialogContent>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card variant="outlined">
								<DialogContent>
									<Typography variant="h6"> Next Phase</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>
										<b>Date:</b>
									</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>
										<b>Phase :</b>
									</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>
										<b>Phase Details:</b>
									</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>
										<b>Requirements Details:</b>
									</Typography>
								</DialogContent>
							</Card>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => toggleViewOngoingDialog()} color="primary">
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
	ongoingData: selectOngoingData,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewOngoingDialog: () => dispatch(toggleViewOngoingDialog()),
	fetchViewOngoingTable: () => dispatch(fetchViewOngoingTable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OngoingPlacements);
