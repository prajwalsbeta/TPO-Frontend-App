import { ViewUpcomingTypes } from './view.upcoming.types';
import { tableData } from './view.upcoming.tabledata';
const INITIAL_STATE = {
	dialog_open: false,
	tableData: tableData,
	loading: false,
	error: '',
	upcomingData: tableData.upcomingData,
};

const viewStudentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewUpcomingTypes.TOGGLE_DIALOG:
			return {
				...state,
				dialog_open: !state.dialog_open,
				upcomingData: action.payload,
			};
		case ViewUpcomingTypes.FETCH_VIEW_UPCOMING_TABLE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewUpcomingTypes.FETCH_VIEW_UPCOMING_TABLE_SUCCESS:
			return {
				...state,
				loading: false,
				tableData: { ...tableData, data: action.payload },
				error: '',
			};
		case ViewUpcomingTypes.FETCH_VIEW_UPCOMING_TABLE_FAILURE:
			return {
				...state,
				loading: false,
				tableData: { ...tableData, data: [] },
				error: action.payload,
			};
		default:
			return state;
	}
};

export default viewStudentReducer;
