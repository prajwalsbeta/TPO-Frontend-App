import { createSelector } from 'reselect';

const selectViewApproveCompany = (state) => state.viewApproveCompany;

export const selectTableData = createSelector(
	[selectViewApproveCompany],
	(viewApproveCompany) => viewApproveCompany.tableData
);

export const selectViewCompanyDialogStatus = createSelector(
	[selectViewApproveCompany],
	(viewApproveCompany) => viewApproveCompany.view_company_dialog_open
);

export const selectRejectCompanyDialogStatus = createSelector(
	[selectViewApproveCompany],
	(viewApproveCompany) => viewApproveCompany.reject_company_dialog_open
);
