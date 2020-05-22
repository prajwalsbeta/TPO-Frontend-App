import React from 'react';

import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

const CustomDialog = (props) => {
	const { viewStudentDialogStatus, toggleViewApproveStudentDialog } = props;
	return (
		<React.Fragment>
			<Dialog
				open={viewStudentDialogStatus}
				onClose={() => {
					toggleViewApproveStudentDialog();
				}}
				aria-labelledby="student-view-title"
				fullWidth
			>
				<DialogTitle id="form-dialog-title">Name</DialogTitle>
				<DialogContent>
					<Typography variant="h6">Personal Details:</Typography>
					<DialogContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
						<div>
							<Typography>Name</Typography>
							<Typography>E-mail:</Typography>
							<Typography>Mobile No:</Typography>
						</div>
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							style={{ width: '30%', height: '30%' }}
						/>
					</DialogContent>
					<DialogContent>
						<Typography variant="h6">Class Details:</Typography>
						<Typography>Department:</Typography>
						<Typography>Class:</Typography>
						<Typography>Roll No:</Typography>
					</DialogContent>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
};

export default CustomDialog;
