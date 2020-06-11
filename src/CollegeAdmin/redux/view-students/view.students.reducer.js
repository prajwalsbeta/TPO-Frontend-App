import { ViewStudentsTypes } from './view.students.types';
import { tableData } from './view.students.tabledata';
const INITIAL_STATE = {
	dialog_open: false,
	tableData: tableData,
	studentData: tableData.studentData,
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
				...state,
				loading: false,
				tableData: { ...tableData, data: action.payload },
				error: '',
			};
		case ViewStudentsTypes.FETCH_VIEW_STUDENT_TABLE_FAILURE:
			return {
				...state,
				loading: false,
				tableData: { ...tableData, data: [] },
				error: action.payload,
			};
		case ViewStudentsTypes.FETCH_VIEW_STUDENT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewStudentsTypes.FETCH_VIEW_STUDENT_SUCCESS:
			return {
				...state,
				loading: false,
				dialog_open: true,
				studentData: action.payload,
				error: '',
			};
		case ViewStudentsTypes.FETCH_VIEW_STUDENT_FAILURE:
			return {
				...state,
				loading: false,
				studentData: {},
				error: action.payload,
			};
		default:
			return state;
	}
};

export default viewStudentReducer;
