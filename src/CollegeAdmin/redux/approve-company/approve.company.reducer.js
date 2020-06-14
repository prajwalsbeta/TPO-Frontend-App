import { ViewCompanyTypes } from './approve.company.types';
import { tableData } from './approve.company.tabledata';
const INITIAL_STATE = {
	view_company_dialog_open: false,
	reject_company_dialog_open: false,
	tableData: tableData,
	companyData: tableData.companyData,
	loading: false,
	error: '',
	tableModified: {},
};

const viewApproveCompanyReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewCompanyTypes.TOGGLE_VIEW_COMPANY_DIALOG:
			return {
				...state,
				view_company_dialog_open: !state.view_company_dialog_open,
			};
		case ViewCompanyTypes.TOGGLE_REJECT_COMPANY_DIALOG:
			return {
				...state,
				reject_company_dialog_open: !state.reject_company_dialog_open,
			};
		case ViewCompanyTypes.FETCH_APPROVE_COMPANY_TABLE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewCompanyTypes.FETCH_APPROVE_COMPANY_TABLE_SUCCESS:
			return {
				...state,
				loading: false,
				tableData: { ...tableData, data: action.payload },
				error: '',
			};
		case ViewCompanyTypes.FETCH_APPROVE_COMPANY_TABLE_FAILURE:
			return {
				...state,
				loading: false,
				tableData: { ...tableData, data: [] },
				companyData: tableData.companyData,
				error: action.payload,
			};
		case ViewCompanyTypes.FETCH_APPROVE_COMPANY_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewCompanyTypes.FETCH_APPROVE_COMPANY_SUCCESS:
			return {
				...state,
				loading: false,
				view_company_dialog_open: true,
				companyData: action.payload,
				error: '',
			};
		case ViewCompanyTypes.FETCH_APPROVE_COMPANY_FAILURE:
			return {
				...state,
				loading: false,
				companyData: tableData.companyData,
				error: action.payload,
			};
		case ViewCompanyTypes.PUT_APPROVE_COMPANY_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewCompanyTypes.PUT_APPROVE_COMPANY_SUCCESS:
			return {
				...state,
				loading: false,
				view_company_dialog_open: false,
				tableModified: action.payload,
				error: '',
			};
		case ViewCompanyTypes.PUT_APPROVE_COMPANY_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case ViewCompanyTypes.REJECT_APPROVE_COMPANY_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewCompanyTypes.REJECT_APPROVE_COMPANY_SUCCESS:
			return {
				...state,
				loading: false,
				view_company_dialog_open: false,
				reject_company_dialog_open: false,
				tableModified: action.payload,
				error: '',
			};
		case ViewCompanyTypes.REJECT_APPROVE_COMPANY_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default viewApproveCompanyReducer;
