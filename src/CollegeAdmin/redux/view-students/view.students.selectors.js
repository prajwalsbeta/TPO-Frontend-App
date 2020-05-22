import { createSelector } from 'reselect';

const selectViewStudents = (state) => state.viewStudents;

export const selectTableData = createSelector([selectViewStudents], (viewStudents) => viewStudents.tableData);

export const selectDialogOpen = createSelector([selectViewStudents], (viewStudents) => viewStudents.dialog_open);
