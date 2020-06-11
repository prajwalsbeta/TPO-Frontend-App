import { ViewStudentsTypes } from './view.students.types';
import axios from 'axios';

export const toggleViewStudentDialog = () => ({
	type: ViewStudentsTypes.TOGGLE_DIALOG,
});

export const fetchViewStudentRequest = () => {
	return {
		type: ViewStudentsTypes.FETCH_VIEW_STUDENT_TABLE_REQUEST,
	};
};

export const fetchViewStudentSuccess = (student) => {
	return {
		type: ViewStudentsTypes.FETCH_VIEW_STUDENT_TABLE_SUCCESS,
		payload: student,
	};
};

export const fetchViewStudentFailure = (error) => {
	return {
		type: ViewStudentsTypes.FETCH_VIEW_STUDENT_TABLE_FAILURE,
		payload: error,
	};
};

export const fetchViewStudent = () => {
	return (dispatch) => {
		dispatch(fetchViewStudentRequest());
		axios
			.get('http://aqueous-taiga-26335.herokuapp.com/api/v1/user/student/unapproved')
			.then((response) => {
				const studentData = response.data;
				dispatch(fetchViewStudentSuccess(studentData));
			})
			.catch((error) => {
				dispatch(fetchViewStudentFailure(error.message));
			});
	};
};
