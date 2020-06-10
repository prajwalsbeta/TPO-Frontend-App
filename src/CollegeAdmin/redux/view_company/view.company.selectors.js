import { createSelector } from 'reselect';

const selectViewCompany = (state) => state.viewCompany;

export const selectTableData = createSelector([selectViewCompany], (viewCompany) => viewCompany.tableData);

export const selectDialogOpen = createSelector([selectViewCompany], (viewCompany) => viewCompany.dialog_open);
