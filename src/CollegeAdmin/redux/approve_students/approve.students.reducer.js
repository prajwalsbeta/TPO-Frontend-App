import { ViewStudentsTypes } from './approve.students.types';
import { tableData } from './approve.students.tabledata';
const INITIAL_STATE = {
	view_student_dialog_open: false,
	reject_student_dialog_open: false,
	tableData: tableData,
	studentData: tableData.studentData,
	loading: false,
	error: '',
	tableModified: {},
};

const viewApproveStudentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewStudentsTypes.TOGGLE_VIEW_STUDENT_DIALOG:
			return {
				...state,
				view_student_dialog_open: !state.view_student_dialog_open,
			};
		case ViewStudentsTypes.TOGGLE_REJECT_STUDENT_DIALOG:
			return {
				...state,
				reject_student_dialog_open: !state.reject_student_dialog_open,
			};
		case ViewStudentsTypes.FETCH_APPROVE_STUDENT_TABLE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewStudentsTypes.FETCH_APPROVE_STUDENT_TABLE_SUCCESS:
			return {
				...state,
				loading: false,
				tableData: { ...tableData, data: action.payload },
				error: '',
			};
		case ViewStudentsTypes.FETCH_APPROVE_STUDENT_TABLE_FAILURE:
			return {
				...state,
				loading: false,
				tableData: { ...tableData, data: [] },
				studentData: tableData.studentData,
				error: action.payload,
			};
		case ViewStudentsTypes.FETCH_APPROVE_STUDENT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewStudentsTypes.FETCH_APPROVE_STUDENT_SUCCESS:
			return {
				...state,
				loading: false,
				view_student_dialog_open: true,
				studentData: action.payload,
				error: '',
			};
		case ViewStudentsTypes.FETCH_APPROVE_STUDENT_FAILURE:
			return {
				...state,
				loading: false,
				studentData: tableData.studentData,
				error: action.payload,
			};
		case ViewStudentsTypes.PUT_APPROVE_STUDENT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewStudentsTypes.PUT_APPROVE_STUDENT_SUCCESS:
			return {
				...state,
				loading: false,
				view_student_dialog_open: false,
				tableModified: action.payload,
				error: '',
			};
		case ViewStudentsTypes.PUT_APPROVE_STUDENT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case ViewStudentsTypes.REJECT_APPROVE_STUDENT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewStudentsTypes.REJECT_APPROVE_STUDENT_SUCCESS:
			return {
				...state,
				loading: false,
				view_student_dialog_open: false,
				reject_student_dialog_open: false,
				tableModified: action.payload,
				error: '',
			};
		case ViewStudentsTypes.REJECT_APPROVE_STUDENT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default viewApproveStudentReducer;
