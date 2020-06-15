import React from 'react';
import MaterialTable from 'material-table';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTableData, selectDialogOpen } from '../redux/ongoing-placements/view.ongoing.selectors';
import { openViewOngoingDialog, toggleViewOngoingDialog } from '../redux/ongoing-placements/view.ongoing.actions';

const useStyles = makeStyles((theme) => ({}));

function OngoingPlacements(props) {
	const { tableData, dialog_open, toggleViewOngoingDialog } = props;
	const classes = useStyles();

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
									<Typography>Date:</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>Phase :</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>Phase Details:</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>Requirements Details:</Typography>
								</DialogContent>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card variant="outlined">
								<DialogContent>
									<Typography variant="h6"> Next Phase</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>Date:</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>Phase :</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>Phase Details:</Typography>
								</DialogContent>
								<DialogContent>
									<Typography>Requirements Details:</Typography>
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
		</React.Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	tableData: selectTableData,
	dialog_open: selectDialogOpen,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewOngoingDialog: () => dispatch(toggleViewOngoingDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OngoingPlacements);
