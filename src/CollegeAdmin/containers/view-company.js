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
	selectCompanyData,
	selectLoading,
	selectError,
} from '../redux/view_company/view.company.selectors';
import {
	openViewCompanyDialog,
	toggleViewCompanyDialog,
	fetchViewCompany,
	fetchViewCompanyTable,
} from '../redux/view_company/view.company.actions';
import Alert from '../components/ErrorAlert';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#229',
	},
}));

function ViewCompany(props) {
	const classes = useStyles();
	const {
		tableData,
		dialog_open,
		toggleViewCompanyDialog,
		loading,
		fetchViewCompany,
		fetchViewCompanyTable,
		error,
		companyData,
	} = props;

	useEffect(() => {
		fetchViewCompanyTable();
	}, []);

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
							fetchViewCompany(rowData._id);
						},
					},
					{
						icon: 'refresh',
						tooltip: 'Refresh Data',
						isFreeAction: true,
						onClick: () => fetchViewCompanyTable(),
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
					<DialogContent>
						<Typography>
							<b>Company Name:</b>
							{` ${companyData.company_name}`}
						</Typography>
						<Typography>
							<b>Email-id:</b>
							{` ${companyData.concerned_person.email}`}
						</Typography>
						<Typography>
							<b>Concerened Person Name:</b>
							{` ${companyData.concerned_person.name}`}
						</Typography>
						<Typography>
							<b>Mobile No.:</b>
							{` ${companyData.concerned_person.contact}`}
						</Typography>
						<Typography>
							<b>Address:</b>
							{` ${companyData.address}`}
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography variant="h6">Requirement Details:</Typography>
						<Typography>
							<b>Number of Students:</b>
						</Typography>
						<Typography>
							<b>Interval of Requirement:</b>
						</Typography>
						<Typography>
							<b>Cutoff:</b>
						</Typography>
						<Typography>
							<b>Live Backlog:</b>
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography variant="h6">Phase Details</Typography>
						<Typography>
							<b>Phase 1:</b>
						</Typography>
						<Typography>
							<b>Phase 2:</b>
						</Typography>
						<Typography>
							<b>Phase 3:</b>
						</Typography>
					</DialogContent>
					<DialogContent>
						<Typography variant="h6">Placements dates:</Typography>
						<Typography>
							<b>Phase 1:</b>
						</Typography>
						<Typography>
							<b>Phase 2:</b>
						</Typography>
						<Typography>
							<b>Phase 3:</b>
						</Typography>
					</DialogContent>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => toggleViewCompanyDialog()} color="primary">
						OK
					</Button>
					{/* <Button onClick={() => toggleViewCompanyDialog()} color="primary">
						Edit
					</Button> */}
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
	companyData: selectCompanyData,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewCompanyDialog: () => dispatch(toggleViewCompanyDialog()),
	fetchViewCompany: (id) => dispatch(fetchViewCompany(id)),
	fetchViewCompanyTable: () => dispatch(fetchViewCompanyTable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewCompany);
