import { createSelector } from 'reselect';

const selectViewOngoing = (state) => state.viewOngoing;

export const selectTableData = createSelector([selectViewOngoing], (viewOngoing) => viewOngoing.tableData);

export const selectDialogOpen = createSelector([selectViewOngoing], (viewOngoing) => viewOngoing.dialog_open);

export const selectLoading = createSelector([selectViewOngoing], (viewOngoing) => viewOngoing.loading);

export const selectError = createSelector([selectViewOngoing], (viewOngoing) => viewOngoing.error);

export const selectOngoingData = createSelector([selectViewOngoing], (viewOngoing) => viewOngoing.ongoingData);
