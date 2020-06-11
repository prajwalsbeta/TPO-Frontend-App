import { ViewStudentsTypes } from './view.students.types';
import axios from 'axios';

export const toggleViewStudentDialog = () => ({
	type: ViewStudentsTypes.TOGGLE_DIALOG,
});

export const fetchViewStudentTableRequest = () => {
	return {
		type: ViewStudentsTypes.FETCH_VIEW_STUDENT_TABLE_REQUEST,
	};
};

export const fetchViewStudentTableSuccess = (studentTable) => {
	return {
		type: ViewStudentsTypes.FETCH_VIEW_STUDENT_TABLE_SUCCESS,
		payload: studentTable,
	};
};

export const fetchViewStudentTableFailure = (error) => {
	return {
		type: ViewStudentsTypes.FETCH_VIEW_STUDENT_TABLE_FAILURE,
		payload: error,
	};
};

export const fetchViewStudentTable = () => {
	return (dispatch) => {
		dispatch(fetchViewStudentTableRequest());
		axios
			.get('http://aqueous-taiga-26335.herokuapp.com/api/v1/user/student/unapproved')
			.then((response) => {
				const studentTableData = response.data;
				dispatch(fetchViewStudentTableSuccess(studentTableData));
			})
			.catch((error) => {
				dispatch(fetchViewStudentTableFailure(error.message));
			});
	};
};

export const fetchViewStudentRequest = () => {
	return {
		type: ViewStudentsTypes.FETCH_VIEW_STUDENT_REQUEST,
	};
};

export const fetchViewStudentSuccess = (student) => {
	return {
		type: ViewStudentsTypes.FETCH_VIEW_STUDENT_SUCCESS,
		payload: student,
	};
};

export const fetchViewStudentFailure = (error) => {
	return {
		type: ViewStudentsTypes.FETCH_VIEW_STUDENT_FAILURE,
		payload: error,
	};
};

export const fetchViewStudent = (id) => {
	return (dispatch) => {
		dispatch(fetchViewStudentRequest());
		axios
			.get(`http://aqueous-taiga-26335.herokuapp.com/api/v1/user/${id}`)
			.then((response) => {
				const studentData = response.data;
				console.log(studentData);
				dispatch(fetchViewStudentSuccess(studentData));
			})
			.catch((error) => {
				dispatch(fetchViewStudentFailure(error.message));
			});
	};
};
