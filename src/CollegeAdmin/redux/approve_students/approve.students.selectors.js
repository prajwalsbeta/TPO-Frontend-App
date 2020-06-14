import { createSelector } from 'reselect';

const selectViewApproveStudents = (state) => state.viewApproveStudents;

export const selectTableData = createSelector(
	[selectViewApproveStudents],
	(viewApproveStudents) => viewApproveStudents.tableData
);

export const selectViewStudentDialogStatus = createSelector(
	[selectViewApproveStudents],
	(viewApproveStudents) => viewApproveStudents.view_student_dialog_open
);

export const selectRejectStudentDialogStatus = createSelector(
	[selectViewApproveStudents],
	(viewApproveStudents) => viewApproveStudents.reject_student_dialog_open
);

export const selectLoading = createSelector(
	[selectViewApproveStudents],
	(viewApproveStudents) => viewApproveStudents.loading
);

export const selectStudentData = createSelector(
	[selectViewApproveStudents],
	(viewApproveStudents) => viewApproveStudents.studentData
);

export const selectTableModified = createSelector(
	[selectViewApproveStudents],
	(viewApproveStudents) => viewApproveStudents.tableModified
);

export const selectError = createSelector(
	[selectViewApproveStudents],
	(viewApproveStudents) => viewApproveStudents.error
);
