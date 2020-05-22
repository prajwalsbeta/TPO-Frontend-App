import { ViewStudentsTypes } from './approve.students.types';
import { tableData } from './approve.students.tabledata';
const INITIAL_STATE = {
	view_student_dialog_open: false,
	reject_student_dialog_open: false,
	tableData: tableData,
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
		default:
			return state;
	}
};

export default viewApproveStudentReducer;
