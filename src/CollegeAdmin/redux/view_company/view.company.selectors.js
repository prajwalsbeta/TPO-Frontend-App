import { createSelector } from 'reselect';

const selectViewCompany = (state) => state.viewCompany;

export const selectTableData = createSelector([selectViewCompany], (viewCompany) => viewCompany.tableData);

export const selectDialogOpen = createSelector([selectViewCompany], (viewCompany) => viewCompany.dialog_open);

export const selectLoading = createSelector([selectViewCompany], (viewCompany) => viewCompany.loading);

export const selectCompanyData = createSelector([selectViewCompany], (viewCompany) => viewCompany.companyData);

export const selectError = createSelector([selectViewCompany], (viewCompany) => viewCompany.error);
