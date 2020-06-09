import { ViewCompanyTypes } from './approve.company.types';
import { tableData } from './approve.company.tabledata';
const INITIAL_STATE = {
	view_company_dialog_open: false,
	reject_company_dialog_open: false,
	tableData: tableData,
};

const viewApproveCompanyReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewCompanyTypes.TOGGLE_VIEW_COMPANY_DIALOG:
			return {
				...state,
				view_company_dialog_open: !state.view_company_dialog_open,
			};
		case ViewCompanyTypes.TOGGLE_REJECT_COMPANY_DIALOG:
			return {
				...state,
				reject_company_dialog_open: !state.reject_company_dialog_open,
			};
		default:
			return state;
	}
};

export default viewApproveCompanyReducer;
