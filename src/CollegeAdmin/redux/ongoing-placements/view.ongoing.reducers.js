import { ViewOngoingTypes } from './view.ongoing.types';
import { tableData } from './view.ongoing.tabledata';
const INITIAL_STATE = {
	dialog_open: false,
	tableData: tableData,
};

const viewStudentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewOngoingTypes.TOGGLE_DIALOG:
			return {
				...state,
				dialog_open: !state.dialog_open,
			};
		default:
			return state;
	}
};

export default viewStudentReducer;
