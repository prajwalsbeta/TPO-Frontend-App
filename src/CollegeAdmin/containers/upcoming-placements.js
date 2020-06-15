import React from 'react';
import MaterialTable from 'material-table';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTableData, selectDialogOpen } from '../redux/upcoming-placements/view.upcoming.selectors';
import { openViewUpcomingDialog, toggleViewUpcomingDialog } from '../redux/upcoming-placements/view.upcoming.actions';

const useStyles = makeStyles((theme) => ({}));

function UpcomingPlacements(props) {
	const { tableData, dialog_open, toggleViewUpcomingDialog } = props;
	const classes = useStyles();

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
							toggleViewUpcomingDialog();
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
					toggleViewUpcomingDialog();
				}}
			/>
			{/**This is for the Popup generated on clicking student for details
			 * #TODO handel edit and save
			 */}
			<Dialog
				open={dialog_open}
				onClose={() => toggleViewUpcomingDialog()}
				aria-labelledby="Upcoming-view-title"
				// maxWidth="lg"
				fullWidth
				disableEnforceFocus
			>
				<DialogTitle id="form-dialog-title">Upcoming Placement Details</DialogTitle>
				<DialogContent>
					<DialogContent>
						<Typography>Company Name:</Typography>
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
				</DialogContent>
				<DialogActions>
					<Button onClick={() => toggleViewUpcomingDialog()} color="primary">
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
	toggleViewUpcomingDialog: () => dispatch(toggleViewUpcomingDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingPlacements);
