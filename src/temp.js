import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';

export default function Temp() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function createData(class_, board, year, percentage) {
		return { class_, board, year, percentage };
	}

	const rows = [createData('10th', 'SSC', '2015', '90')];

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open form dialog
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="student-view-title" fullWidth>
				<DialogTitle id="form-dialog-title">Name</DialogTitle>
				<DialogContent>
					<Typography variant="h6">Personal Details:</Typography>
					<DialogContentText
						style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<div>
							<Typography>Name</Typography>
							<Typography>E-mail:</Typography>
							<Typography>Mobile No:</Typography>
						</div>
						<img src="http://loremflickr.com/300/200" style={{ width: '30%', height: '30%' }} />
					</DialogContentText>
					<DialogContentText>
						<Typography variant="h6">Class Details:</Typography>
						<Typography>Department:</Typography>
						<Typography>Class:</Typography>
						<Typography>Roll No:</Typography>
					</DialogContentText>
					<DialogContentText>
						<Typography variant="h6">Acadamic Details:</Typography>
						<TableContainer component={Paper}>
							<Table size="small" aria-label="acadamic-table">
								<TableHead>
									<TableRow>
										<TableCell>Class</TableCell>
										<TableCell>Board</TableCell>
										<TableCell>Year of Passing</TableCell>
										<TableCell>Percentage</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow key={row.class}>
											<TableCell>{row.class_}</TableCell>
											<TableCell>{row.board}</TableCell>
											<TableCell>{row.year}</TableCell>
											<TableCell>{row.percentage}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</DialogContentText>
					<DialogContent>
						<Typography>Apply for Placements:</Typography>
					</DialogContent>
					<DialogContent>
						<Typography>Status:</Typography>
					</DialogContent>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Edit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
