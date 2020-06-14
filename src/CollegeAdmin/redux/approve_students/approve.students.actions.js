import { ViewStudentsTypes } from './approve.students.types';
import axios from 'axios';
export const toggleViewApproveStudentDialog = () => ({
	type: ViewStudentsTypes.TOGGLE_VIEW_STUDENT_DIALOG,
});

export const toggleRejectStudentDialog = () => ({
	type: ViewStudentsTypes.TOGGLE_REJECT_STUDENT_DIALOG,
});

export const fetchApproveStudentTableRequest = () => {
	return {
		type: ViewStudentsTypes.FETCH_APPROVE_STUDENT_TABLE_REQUEST,
	};
};

export const fetchApproveStudentTableSuccess = (studentTable) => {
	return {
		type: ViewStudentsTypes.FETCH_APPROVE_STUDENT_TABLE_SUCCESS,
		payload: studentTable,
	};
};

export const fetchApproveStudentTableFailure = (error) => {
	return {
		type: ViewStudentsTypes.FETCH_APPROVE_STUDENT_TABLE_FAILURE,
		payload: error,
	};
};

export const fetchApproveStudentTable = () => {
	return (dispatch) => {
		dispatch(fetchApproveStudentTableRequest());
		axios
			.get('http://aqueous-taiga-26335.herokuapp.com/api/v1/user/student/unapproved')
			.then((response) => {
				const studentTableData = response.data;
				dispatch(fetchApproveStudentTableSuccess(studentTableData));
			})
			.catch((error) => {
				dispatch(fetchApproveStudentTableFailure(error.message));
			});
	};
};

export const fetchApproveStudentRequest = () => {
	return {
		type: ViewStudentsTypes.FETCH_APPROVE_STUDENT_REQUEST,
	};
};

export const fetchApproveStudentSuccess = (student) => {
	return {
		type: ViewStudentsTypes.FETCH_APPROVE_STUDENT_SUCCESS,
		payload: student,
	};
};

export const fetchApproveStudentFailure = (error) => {
	return {
		type: ViewStudentsTypes.FETCH_APPROVE_STUDENT_FAILURE,
		payload: error,
	};
};

export const fetchApproveStudent = (id) => {
	return (dispatch) => {
		dispatch(fetchApproveStudentRequest());
		axios
			.get(`http://aqueous-taiga-26335.herokuapp.com/api/v1/user/${id}`)
			.then((response) => {
				const studentData = response.data;
				dispatch(fetchApproveStudentSuccess(studentData));
			})
			.catch((error) => {
				dispatch(fetchApproveStudentFailure(error.message));
			});
	};
};

export const putApproveStudentRequest = () => {
	return {
		type: ViewStudentsTypes.PUT_APPROVE_STUDENT_REQUEST,
	};
};

export const putApproveStudentSuccess = (student) => {
	return {
		type: ViewStudentsTypes.PUT_APPROVE_STUDENT_SUCCESS,
		payload: student,
	};
};

export const putApproveStudentFailure = (error) => {
	return {
		type: ViewStudentsTypes.PUT_APPROVE_STUDENT_FAILURE,
		payload: error,
	};
};

export const putApproveStudent = (id) => {
	return (dispatch) => {
		dispatch(putApproveStudentRequest());
		axios
			.put(`http://aqueous-taiga-26335.herokuapp.com/api/v1/user/${id}/approve`)
			.then((response) => {
				const studentData = response.data;
				dispatch(putApproveStudentSuccess(studentData));
			})
			.catch((error) => {
				console.error(error.message);
				dispatch(putApproveStudentFailure(error.message));
			});
	};
};

export const rejectApproveStudentRequest = () => {
	return {
		type: ViewStudentsTypes.REJECT_APPROVE_STUDENT_REQUEST,
	};
};

export const rejectApproveStudentSuccess = (student) => {
	return {
		type: ViewStudentsTypes.REJECT_APPROVE_STUDENT_SUCCESS,
		payload: student,
	};
};

export const rejectApproveStudentFailure = (error) => {
	return {
		type: ViewStudentsTypes.REJECT_APPROVE_STUDENT_FAILURE,
		payload: error,
	};
};

export const rejectApproveStudent = (id, data) => {
	return (dispatch) => {
		dispatch(rejectApproveStudentRequest());
		var bodyFormData = new FormData();
		bodyFormData.set('reason', data);
		axios
			.put(`http://aqueous-taiga-26335.herokuapp.com/api/v1/user/${id}/reject`, (data = bodyFormData))
			.then((response) => {
				const studentData = response.data;
				dispatch(rejectApproveStudentSuccess(studentData));
			})
			.catch((error) => {
				console.error(error.message);
				dispatch(rejectApproveStudentFailure(error.message));
			});
	};
};
