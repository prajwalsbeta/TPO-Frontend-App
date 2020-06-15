import { ViewDateTypes } from './approve.date.types';
import axios from 'axios';

export const toggleViewApproveDateDialog = (data) => ({
	type: ViewDateTypes.TOGGLE_VIEW_DATE_DIALOG,
	payload: data,
});

export const toggleRejectDateDialog = () => ({
	type: ViewDateTypes.TOGGLE_REJECT_DATE_DIALOG,
});

export const fetchApproveDateTableRequest = () => {
	return {
		type: ViewDateTypes.FETCH_APPROVE_DATE_TABLE_REQUEST,
	};
};

export const fetchApproveDateTableSuccess = (dateTable) => {
	return {
		type: ViewDateTypes.FETCH_APPROVE_DATE_TABLE_SUCCESS,
		payload: dateTable,
	};
};

export const fetchApproveDateTableFailure = (error) => {
	return {
		type: ViewDateTypes.FETCH_APPROVE_DATE_TABLE_FAILURE,
		payload: error,
	};
};

const getDate = (longDate) => {
	const date = new Date(parseInt(longDate));
	var curr_date = date.getDate();
	var curr_month = date.getMonth() + 1;
	var curr_year = date.getFullYear();
	const correctDate = `${curr_date}/${curr_month}/${curr_year}`;
	return correctDate;
	// const correctDate = `${day}/${month}/${year}`;
	// return correctDate;
};

export const fetchApproveDateTable = () => {
	return (dispatch) => {
		dispatch(fetchApproveDateTableRequest());
		axios
			.get('http://aqueous-taiga-26335.herokuapp.com/api/v1/placement/phase/unapproved')
			.then((response) => {
				const correctedDate = response.data.map((item) => {
					const c_date = getDate(item.requested_date.$date.$numberLong);
					return { ...item, c_date: c_date };
				});
				const dateTableData = correctedDate;
				dispatch(fetchApproveDateTableSuccess(dateTableData));
			})
			.catch((error) => {
				dispatch(fetchApproveDateTableFailure(error.message));
			});
	};
};

export const putApproveDateRequest = () => {
	return {
		type: ViewDateTypes.PUT_APPROVE_DATE_REQUEST,
	};
};

export const putApproveDateuccess = (date) => {
	return {
		type: ViewDateTypes.PUT_APPROVE_DATE_SUCCESS,
		payload: date,
	};
};

export const putApproveDateFailure = (error) => {
	return {
		type: ViewDateTypes.PUT_APPROVE_DATE_FAILURE,
		payload: error,
	};
};

export const putApproveDate = (id, title) => {
	return (dispatch) => {
		const payload = { placement_id: id, phase_title: title };
		dispatch(putApproveDateRequest());
		axios
			.put(`http://aqueous-taiga-26335.herokuapp.com/api/v1/placement/phase/approve`, payload)
			.then((response) => {
				const dateData = response.data;
				dispatch(putApproveDateuccess(dateData));
			})
			.catch((error) => {
				console.error(error);
				dispatch(putApproveDateFailure(error.message));
			});
	};
};

export const rejectApproveDateRequest = () => {
	return {
		type: ViewDateTypes.REJECT_APPROVE_DATE_REQUEST,
	};
};

export const rejectApproveDateuccess = (date) => {
	return {
		type: ViewDateTypes.REJECT_APPROVE_DATE_SUCCESS,
		payload: date,
	};
};

export const rejectApproveDateFailure = (error) => {
	return {
		type: ViewDateTypes.REJECT_APPROVE_DATE_FAILURE,
		payload: error,
	};
};

export const rejectApproveDate = (id, title, data) => {
	return (dispatch) => {
		dispatch(rejectApproveDateRequest());
		data = getSendDate(data);
		console.log(data);
		axios
			.put(`http://aqueous-taiga-26335.herokuapp.com/api/v1/placement/phase/suggest_date`, {
				placement_id: id,
				phase_title: title,
				suggested_date: data,
			})
			.then((response) => {
				console.log(response);
				const dateData = response.data;
				dispatch(rejectApproveDateuccess(dateData));
			})
			.catch((error) => {
				console.error(error);
				dispatch(rejectApproveDateFailure(error.message));
			});
	};
};

export const fetchPendingDateTableRequest = () => {
	return {
		type: ViewDateTypes.FETCH_PENDING_DATE_TABLE_REQUEST,
	};
};

export const fetchPendingDateTableSuccess = (dateTable) => {
	return {
		type: ViewDateTypes.FETCH_PENDING_DATE_TABLE_SUCCESS,
		payload: dateTable,
	};
};

export const fetchPendingDateTableFailure = (error) => {
	return {
		type: ViewDateTypes.FETCH_PENDING_DATE_TABLE_FAILURE,
		payload: error,
	};
};

export const fetchPendingDateTable = () => {
	return (dispatch) => {
		dispatch(fetchPendingDateTableRequest());
		axios
			.get('http://aqueous-taiga-26335.herokuapp.com/api/v1/placement/phase/pending')
			.then((response) => {
				const correctedDate = response.data.map((item) => {
					const c_date = getDate(item.requested_date.$date.$numberLong);
					return { ...item, c_date: c_date };
				});
				const dateTableData = correctedDate;
				dispatch(fetchPendingDateTableSuccess(dateTableData));
			})
			.catch((error) => {
				console.error(error);
				dispatch(fetchPendingDateTableFailure(error.message));
			});
	};
};

const getSendDate = (date) => {
	var curr_date = date.getDate();
	var curr_month = date.getMonth() + 1;
	var curr_year = date.getFullYear();
	if (curr_date < 10) {
		curr_date = '0' + curr_date;
	}
	if (curr_month < 10) {
		curr_month = '0' + curr_month;
	}
	const correctDate = `${curr_year}-${curr_month}-${curr_date}`;
	return correctDate;
};
