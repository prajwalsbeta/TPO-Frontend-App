import { createSelector } from 'reselect';

const selectViewUpcoming = (state) => state.viewUpcoming;

export const selectTableData = createSelector([selectViewUpcoming], (viewUpcoming) => viewUpcoming.tableData);

export const selectDialogOpen = createSelector([selectViewUpcoming], (viewUpcoming) => viewUpcoming.dialog_open);
