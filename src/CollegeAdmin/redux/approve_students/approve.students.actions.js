import { ViewStudentsTypes } from './approve.students.types';

export const toggleViewApproveStudentDialog = () => ({
	type: ViewStudentsTypes.TOGGLE_VIEW_STUDENT_DIALOG,
});

export const toggleRejectStudentDialog = () => ({
	type: ViewStudentsTypes.TOGGLE_REJECT_STUDENT_DIALOG,
});
