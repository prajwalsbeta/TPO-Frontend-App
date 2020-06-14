import { ViewCompanyTypes } from './approve.company.types';
import axios from 'axios';
export const toggleViewApproveCompanyDialog = () => ({
	type: ViewCompanyTypes.TOGGLE_VIEW_COMPANY_DIALOG,
});

export const toggleRejectCompanyDialog = () => ({
	type: ViewCompanyTypes.TOGGLE_REJECT_COMPANY_DIALOG,
});

export const fetchApproveCompanyTableRequest = () => {
	return {
		type: ViewCompanyTypes.FETCH_APPROVE_COMPANY_TABLE_REQUEST,
	};
};

export const fetchApproveCompanyTableSuccess = (companyTable) => {
	return {
		type: ViewCompanyTypes.FETCH_APPROVE_COMPANY_TABLE_SUCCESS,
		payload: companyTable,
	};
};

export const fetchApproveCompanyTableFailure = (error) => {
	return {
		type: ViewCompanyTypes.FETCH_APPROVE_COMPANY_TABLE_FAILURE,
		payload: error,
	};
};

export const fetchApproveCompanyTable = () => {
	return (dispatch) => {
		dispatch(fetchApproveCompanyTableRequest());
		axios
			.get('http://aqueous-taiga-26335.herokuapp.com/api/v1/user/company/unapproved')
			.then((response) => {
				const companyTableData = response.data;
				dispatch(fetchApproveCompanyTableSuccess(companyTableData));
			})
			.catch((error) => {
				dispatch(fetchApproveCompanyTableFailure(error.message));
			});
	};
};

export const fetchApproveCompanyRequest = () => {
	return {
		type: ViewCompanyTypes.FETCH_APPROVE_COMPANY_REQUEST,
	};
};

export const fetchApproveCompanyuccess = (company) => {
	return {
		type: ViewCompanyTypes.FETCH_APPROVE_COMPANY_SUCCESS,
		payload: company,
	};
};

export const fetchApproveCompanyFailure = (error) => {
	return {
		type: ViewCompanyTypes.FETCH_APPROVE_COMPANY_FAILURE,
		payload: error,
	};
};

export const fetchApproveCompany = (id) => {
	return (dispatch) => {
		dispatch(fetchApproveCompanyRequest());
		axios
			.get(`http://aqueous-taiga-26335.herokuapp.com/api/v1/user/${id}`)
			.then((response) => {
				const companyData = response.data;
				dispatch(fetchApproveCompanyuccess(companyData));
			})
			.catch((error) => {
				dispatch(fetchApproveCompanyFailure(error.message));
			});
	};
};

export const putApproveCompanyRequest = () => {
	return {
		type: ViewCompanyTypes.PUT_APPROVE_COMPANY_REQUEST,
	};
};

export const putApproveCompanyuccess = (company) => {
	return {
		type: ViewCompanyTypes.PUT_APPROVE_COMPANY_SUCCESS,
		payload: company,
	};
};

export const putApproveCompanyFailure = (error) => {
	return {
		type: ViewCompanyTypes.PUT_APPROVE_COMPANY_FAILURE,
		payload: error,
	};
};

export const putApproveCompany = (id) => {
	return (dispatch) => {
		dispatch(putApproveCompanyRequest());
		axios
			.put(`http://aqueous-taiga-26335.herokuapp.com/api/v1/user/${id}/approve`)
			.then((response) => {
				const companyData = response.data;
				dispatch(putApproveCompanyuccess(companyData));
			})
			.catch((error) => {
				console.error(error.message);
				dispatch(putApproveCompanyFailure(error.message));
			});
	};
};

export const rejectApproveCompanyRequest = () => {
	return {
		type: ViewCompanyTypes.REJECT_APPROVE_COMPANY_REQUEST,
	};
};

export const rejectApproveCompanyuccess = (company) => {
	return {
		type: ViewCompanyTypes.REJECT_APPROVE_COMPANY_SUCCESS,
		payload: company,
	};
};

export const rejectApproveCompanyFailure = (error) => {
	return {
		type: ViewCompanyTypes.REJECT_APPROVE_COMPANY_FAILURE,
		payload: error,
	};
};

export const rejectApproveCompany = (id, data) => {
	return (dispatch) => {
		dispatch(rejectApproveCompanyRequest());
		var bodyFormData = new FormData();
		bodyFormData.set('reason', data);
		axios
			.put(`http://aqueous-taiga-26335.herokuapp.com/api/v1/user/${id}/reject`, (data = bodyFormData))
			.then((response) => {
				const companyData = response.data;
				dispatch(rejectApproveCompanyuccess(companyData));
			})
			.catch((error) => {
				console.error(error.message);
				dispatch(rejectApproveCompanyFailure(error.message));
			});
	};
};
