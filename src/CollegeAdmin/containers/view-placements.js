import React from 'react';
import MaterialTable from 'material-table';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTableData, selectDialogOpen } from '../redux/view-placements/view.placements.selectors';
import { openViewPlacementDialog, toggleViewPlacementDialog } from '../redux/view-placements/view.placements.actions';

const useStyles = makeStyles((theme) => ({}));

function ViewPlacements(props) {
	const { tableData, dialog_open, toggleViewPlacementDialog } = props;
	const classes = useStyles();

	return (
		<React.Fragment>
			<MaterialTable
				title="Placement Details"
				columns={tableData.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View details',
						onClick: (event, rowData) => {
							toggleViewPlacementDialog();
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
			/>
			{/**This is for the Popup generated on clicking student for details
			 * #TODO handel edit and save
			 */}
			<Dialog
				open={dialog_open}
				onClose={() => toggleViewPlacementDialog()}
				aria-labelledby="Placement-view-title"
				maxWidth="lg"
				fullWidth
				disableEnforceFocus
			>
				<DialogTitle id="form-dialog-title">Placement Details</DialogTitle>
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
					<Button onClick={() => toggleViewPlacementDialog()} color="primary">
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
	toggleViewPlacementDialog: () => dispatch(toggleViewPlacementDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlacements);
