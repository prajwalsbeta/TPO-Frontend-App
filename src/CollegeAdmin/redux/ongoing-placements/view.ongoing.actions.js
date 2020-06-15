import { ViewOngoingTypes } from './view.ongoing.types';
import axios from 'axios';
export const toggleViewOngoingDialog = () => ({
	type: ViewOngoingTypes.TOGGLE_DIALOG,
});

export const fetchViewOngoingTableRequest = () => {
	return {
		type: ViewOngoingTypes.FETCH_VIEW_ONGOING_TABLE_REQUEST,
	};
};

export const fetchViewOngoingTableSuccess = (ongoingTable) => {
	return {
		type: ViewOngoingTypes.FETCH_VIEW_ONGOING_TABLE_SUCCESS,
		payload: ongoingTable,
	};
};

export const fetchViewOngoingTableFailure = (error) => {
	return {
		type: ViewOngoingTypes.FETCH_VIEW_ONGOING_TABLE_FAILURE,
		payload: error,
	};
};

export const fetchViewOngoingTable = () => {
	return (dispatch) => {
		dispatch(fetchViewOngoingTableRequest());
		axios
			.get('http://aqueous-taiga-26335.herokuapp.com/api/v1/placement/phase/ongoing')
			.then((response) => {
				const correctedDate = response.data.map((item) => {
					const c_date = getDate(item.date.$date.$numberLong);
					return { ...item, c_date: c_date };
				});
				const dateTableData = correctedDate;
				dispatch(fetchViewOngoingTableSuccess(dateTableData));
			})
			.catch((error) => {
				console.error(error);
				dispatch(fetchViewOngoingTableFailure(error.message));
			});
	};
};

const getDate = (longDate) => {
	const date = new Date(parseInt(longDate));
	var curr_date = date.getDate();
	var curr_month = date.getMonth() + 1;
	var curr_year = date.getFullYear();
	const correctDate = `${curr_date}/${curr_month}/${curr_year}`;
	return correctDate;
};
