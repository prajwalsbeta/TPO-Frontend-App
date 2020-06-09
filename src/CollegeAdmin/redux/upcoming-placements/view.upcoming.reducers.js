import { ViewUpcomingTypes } from './view.upcoming.types';
import { tableData } from './view.upcoming.tabledata';
const INITIAL_STATE = {
	dialog_open: false,
	tableData: tableData,
};

const viewStudentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewUpcomingTypes.TOGGLE_DIALOG:
			return {
				...state,
				dialog_open: !state.dialog_open,
			};
		default:
			return state;
	}
};

export default viewStudentReducer;
