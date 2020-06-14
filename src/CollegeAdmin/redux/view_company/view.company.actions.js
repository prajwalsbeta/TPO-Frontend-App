import { ViewCompanyTypes } from './view.company.types';
import axios from 'axios';

export const toggleViewCompanyDialog = () => ({
	type: ViewCompanyTypes.TOGGLE_DIALOG,
});

export const fetchViewCompanyTableRequest = () => {
	return {
		type: ViewCompanyTypes.FETCH_VIEW_COMPANY_TABLE_REQUEST,
	};
};

export const fetchViewCompanyTableSuccess = (companyTable) => {
	return {
		type: ViewCompanyTypes.FETCH_VIEW_COMPANY_TABLE_SUCCESS,
		payload: companyTable,
	};
};

export const fetchViewCompanyTableFailure = (error) => {
	return {
		type: ViewCompanyTypes.FETCH_VIEW_COMPANY_TABLE_FAILURE,
		payload: error,
	};
};

export const fetchViewCompanyTable = () => {
	return (dispatch) => {
		dispatch(fetchViewCompanyTableRequest());
		axios
			.get('http://aqueous-taiga-26335.herokuapp.com/api/v1/user/company/approved')
			.then((response) => {
				const companyTableData = response.data;
				dispatch(fetchViewCompanyTableSuccess(companyTableData));
			})
			.catch((error) => {
				dispatch(fetchViewCompanyTableFailure(error.message));
			});
	};
};

export const fetchViewCompanyRequest = () => {
	return {
		type: ViewCompanyTypes.FETCH_VIEW_COMPANY_REQUEST,
	};
};

export const fetchViewCompanyuccess = (company) => {
	return {
		type: ViewCompanyTypes.FETCH_VIEW_COMPANY_SUCCESS,
		payload: company,
	};
};

export const fetchViewCompanyFailure = (error) => {
	return {
		type: ViewCompanyTypes.FETCH_VIEW_COMPANY_FAILURE,
		payload: error,
	};
};

export const fetchViewCompany = (id) => {
	return (dispatch) => {
		dispatch(fetchViewCompanyRequest());
		axios
			.get(`http://aqueous-taiga-26335.herokuapp.com/api/v1/user/${id}`)
			.then((response) => {
				const companyData = response.data;
				dispatch(fetchViewCompanyuccess(companyData));
			})
			.catch((error) => {
				dispatch(fetchViewCompanyFailure(error.message));
			});
	};
};
