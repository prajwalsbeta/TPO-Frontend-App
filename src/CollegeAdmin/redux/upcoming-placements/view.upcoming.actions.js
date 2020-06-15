import { ViewUpcomingTypes } from './view.upcoming.types';
import tableData from './view.upcoming.tabledata';
import axios from 'axios';
export const toggleViewUpcomingDialog = (id) => ({
	type: ViewUpcomingTypes.TOGGLE_DIALOG,
	payload: id,
});

export const fetchViewUpcomingTableRequest = () => {
	return {
		type: ViewUpcomingTypes.FETCH_VIEW_UPCOMING_TABLE_REQUEST,
	};
};

export const fetchViewUpcomingTableSuccess = (upcomingTable) => {
	return {
		type: ViewUpcomingTypes.FETCH_VIEW_UPCOMING_TABLE_SUCCESS,
		payload: upcomingTable,
	};
};

export const fetchViewUpcomingTableFailure = (error) => {
	return {
		type: ViewUpcomingTypes.FETCH_VIEW_UPCOMING_TABLE_FAILURE,
		payload: error,
	};
};

export const fetchViewUpcomingTable = () => {
	return (dispatch) => {
		dispatch(fetchViewUpcomingTableRequest());
		axios
			.get('http://aqueous-taiga-26335.herokuapp.com/api/v1/placement/phase/upcoming')
			.then((response) => {
				const correctedDate = response.data.map((item) => {
					const c_date = getDate(item.date.$date.$numberLong);
					return { ...item, c_date: c_date };
				});
				const dateTableData = correctedDate;
				dispatch(fetchViewUpcomingTableSuccess(dateTableData));
			})
			.catch((error) => {
				console.error(error);
				dispatch(fetchViewUpcomingTableFailure(error.message));
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
