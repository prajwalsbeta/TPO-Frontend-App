import { ViewCompanyTypes } from './view.company.types';
import { tableData } from './view.company.tabledata';
const INITIAL_STATE = {
	dialog_open: false,
	tableData: tableData,
};

const viewStudentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewCompanyTypes.TOGGLE_DIALOG:
			return {
				...state,
				dialog_open: !state.dialog_open,
			};
		default:
			return state;
	}
};

export default viewStudentReducer;
