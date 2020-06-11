import { ViewStudentsTypes } from './view.students.types';
import { tableData } from './view.students.tabledata';
const INITIAL_STATE = {
	dialog_open: false,
	tableData: tableData,
	loading: false,
	error: '',
};

const viewStudentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewStudentsTypes.TOGGLE_DIALOG:
			return {
				...state,
				dialog_open: !state.dialog_open,
			};
		case ViewStudentsTypes.FETCH_VIEW_STUDENT_TABLE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewStudentsTypes.FETCH_VIEW_STUDENT_TABLE_SUCCESS:
			return {
				loading: false,
				tableData: { ...tableData, data: action.payload },
				error: '',
			};
		case ViewStudentsTypes.FETCH_VIEW_STUDENT_TABLE_FAILURE:
			return {
				loading: false,
				tableData: { ...tableData, data: [] },
				error: action.payload,
			};
		default:
			return state;
	}
};

export default viewStudentReducer;
