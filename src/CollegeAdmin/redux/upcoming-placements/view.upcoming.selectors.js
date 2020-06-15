import { createSelector } from 'reselect';

const selectViewUpcoming = (state) => state.viewUpcoming;

export const selectTableData = createSelector([selectViewUpcoming], (viewUpcoming) => viewUpcoming.tableData);

export const selectDialogOpen = createSelector([selectViewUpcoming], (viewUpcoming) => viewUpcoming.dialog_open);

export const selectLoading = createSelector([selectViewUpcoming], (viewUpcoming) => viewUpcoming.loading);

export const selectUpcomingData = createSelector([selectViewUpcoming], (viewUpcoming) => viewUpcoming.upcomingData);

export const selectError = createSelector([selectViewUpcoming], (viewUpcoming) => viewUpcoming.error);
