import { createSelector } from 'reselect';

const selectViewApproveDate = (state) => state.viewApproveDate;

export const selectUnapprovedTableData = createSelector(
	[selectViewApproveDate],
	(viewApproveDate) => viewApproveDate.unapprovedTableData
);

export const selectViewDateDialogStatus = createSelector(
	[selectViewApproveDate],
	(viewApproveDate) => viewApproveDate.view_date_dialog_open
);

export const selectRejectDateDialogStatus = createSelector(
	[selectViewApproveDate],
	(viewApproveDate) => viewApproveDate.reject_date_dialog_open
);
