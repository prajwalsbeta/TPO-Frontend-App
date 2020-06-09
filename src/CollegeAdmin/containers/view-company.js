import React from 'react';
import MaterialTable from 'material-table';
import {
	Typography,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTableData, selectDialogOpen } from '../redux/view_company/view.company.selectors';
import { openViewCompanyDialog, toggleViewCompanyDialog } from '../redux/view_company/view.company.actions';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({}));

function ViewCompany(props) {
	const { tableData, dialog_open, toggleViewCompanyDialog } = props;
	const classes = useStyles();

	function createData(class_, board, year, percentage) {
		return { class_, board, year, percentage };
	}

	const rows = [createData('10th', 'SSC', '2015', '90')];

	return (
		<React.Fragment>
			<MaterialTable
				title="Company Details"
				columns={tableData.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View details',
						onClick: (event, rowData) => {
							toggleViewCompanyDialog();
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
				onClose={() => toggleViewCompanyDialog()}
				aria-labelledby="company-view-title"
				fullWidth
				disableEnforceFocus
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
					<Button onClick={() => toggleViewCompanyDialog()} color="primary">
						Cancel
					</Button>
					<Button onClick={() => toggleViewCompanyDialog()} color="primary">
						Edit
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
	toggleViewCompanyDialog: () => dispatch(toggleViewCompanyDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewCompany);
