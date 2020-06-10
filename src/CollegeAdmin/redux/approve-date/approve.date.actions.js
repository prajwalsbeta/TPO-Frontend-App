import { ViewDateTypes } from './approve.date.types';

export const toggleViewApproveDateDialog = () => ({
	type: ViewDateTypes.TOGGLE_VIEW_DATE_DIALOG,
});

export const toggleRejectDateDialog = () => ({
	type: ViewDateTypes.TOGGLE_REJECT_DATE_DIALOG,
});
