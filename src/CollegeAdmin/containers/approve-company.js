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
	Divider,
	TextField,
	Backdrop,
	CircularProgress,
	Snackbar,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectViewCompanyDialogStatus,
	selectTableData,
	selectRejectCompanyDialogStatus,
	selectLoading,
	selectCompanyData,
	selectTableModified,
	selectError,
} from '../redux/approve-company/approve.company.selectors';
import {
	toggleViewApproveCompanyDialog,
	toggleRejectCompanyDialog,
	fetchApproveCompanyTable,
	fetchApproveCompany,
	rejectApproveCompany,
	putApproveCompany,
} from '../redux/approve-company/approve.company.actions';
import Alert from '../components/ErrorAlert';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#229',
	},
}));

function ApproveCompany(props) {
	const {
		viewCompanyDialogStatus,
		tableData,
		toggleViewApproveCompanyDialog,
		rejectCompanyDialogStatus,
		toggleRejectCompanyDialog,
		loading,
		fetchApproveCompany,
		fetchApproveCompanyTable,
		companyData,
		putApproveCompany,
		tableModified,
		error,
		rejectApproveCompany,
	} = props;

	function handleChange(event) {
		setReason(event.target.value);
	}

	const classes = useStyles();
	const [reason, setReason] = useState('');
	useEffect(() => {
		fetchApproveCompanyTable();
	}, []);

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
							fetchApproveCompany(rowData._id);
						},
					},
					{
						icon: 'refresh',
						tooltip: 'Refresh',
						isFreeAction: true,
						onClick: () => fetchApproveCompanyTable(),
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
			{/**This is for the Popup generated on clicking Company for details
			 * #TODO handel edit and save
			 */}
			<Dialog
				open={viewCompanyDialogStatus}
				onClose={() => {
					toggleViewApproveCompanyDialog();
				}}
				aria-labelledby="Company-view-title"
				maxWidth="md"
				fullWidth
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
					<Divider />
					<DialogContent>
						<Typography variant="h6">Placements dates:</Typography>
						<Typography>Phase 1:</Typography>
						<Typography>Phase 2:</Typography>
						<Typography>Phase 3:</Typography>
					</DialogContent>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => toggleViewApproveCompanyDialog()} color="primary" disabled={loading}>
						Cancel
					</Button>
					<Button onClick={() => putApproveCompany(companyData._id)} color="primary" disabled={loading}>
						Approve
					</Button>
					<Button onClick={() => toggleRejectCompanyDialog()} color="primary" disabled={loading}>
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
					<form onSubmit={() => rejectApproveCompany(companyData._id, reason)}>
						<TextField
							id="filled-multiline-static"
							label="Reason to reject"
							multiline
							rows={12}
							placeholder="Enter reason to reject"
							variant="filled"
							fullWidth
							required
							onChange={handleChange}
						/>
						<DialogActions>
							<Button onClick={() => toggleRejectCompanyDialog()} color="primary" disabled={loading}>
								Cancel
							</Button>
							<Button type="submit" color="primary" disabled={loading}>
								Submit
							</Button>
						</DialogActions>
					</form>
				</div>
			</Dialog>

			<Snackbar
				open={error != ''}
				autoHideDuration={6000}
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
	viewCompanyDialogStatus: selectViewCompanyDialogStatus,
	tableData: selectTableData,
	rejectCompanyDialogStatus: selectRejectCompanyDialogStatus,
	loading: selectLoading,
	companyData: selectCompanyData,
	tableModified: selectTableModified,
	error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
	toggleViewApproveCompanyDialog: () => dispatch(toggleViewApproveCompanyDialog()),
	toggleRejectCompanyDialog: () => dispatch(toggleRejectCompanyDialog()),
	fetchApproveCompanyTable: () => dispatch(fetchApproveCompanyTable()),
	fetchApproveCompany: (id) => dispatch(fetchApproveCompany(id)),
	putApproveCompany: (id) => dispatch(putApproveCompany(id)),
	rejectApproveCompany: (id, r) => dispatch(rejectApproveCompany(id, r)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApproveCompany);
