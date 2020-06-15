import { ViewOngoingTypes } from './view.ongoing.types';
import { tableData } from './view.ongoing.tabledata';
const INITIAL_STATE = {
	dialog_open: false,
	tableData: tableData,
	error: '',
	loading: false,
	ongoingData: tableData.ongoingData,
};

const viewStudentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewOngoingTypes.TOGGLE_DIALOG:
			return {
				...state,
				dialog_open: !state.dialog_open,
			};
		case ViewOngoingTypes.FETCH_VIEW_ONGOING_TABLE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewOngoingTypes.FETCH_VIEW_ONGOING_TABLE_SUCCESS:
			return {
				...state,
				loading: false,
				tableData: { ...tableData, data: action.payload },
				error: '',
			};
		case ViewOngoingTypes.FETCH_VIEW_ONGOING_TABLE_FAILURE:
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
