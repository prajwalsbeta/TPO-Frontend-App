import { ViewDateTypes } from './approve.date.types';
import { unapprovedTableData } from './approve.date.tableData';
const INITIAL_STATE = {
	view_date_dialog_open: false,
	reject_date_dialog_open: false,
	unapprovedTableData: unapprovedTableData,
};

const viewApproveDateReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewDateTypes.TOGGLE_VIEW_DATE_DIALOG:
			return {
				...state,
				view_date_dialog_open: !state.view_date_dialog_open,
			};
		case ViewDateTypes.TOGGLE_REJECT_DATE_DIALOG:
			return {
				...state,
				reject_date_dialog_open: !state.reject_date_dialog_open,
			};
		default:
			return state;
	}
};

export default viewApproveDateReducer;
