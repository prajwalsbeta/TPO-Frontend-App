import { ViewCompanyTypes } from './view.company.types';
import { tableData } from './view.company.tabledata';
const INITIAL_STATE = {
	dialog_open: false,
	tableData: tableData,
	loading: false,
	error: '',
	companyData: tableData.companyData,
};

const viewCompanyReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewCompanyTypes.TOGGLE_DIALOG:
			return {
				...state,
				dialog_open: !state.dialog_open,
			};
		case ViewCompanyTypes.FETCH_VIEW_COMPANY_TABLE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewCompanyTypes.FETCH_VIEW_COMPANY_TABLE_SUCCESS:
			return {
				...state,
				loading: false,
				tableData: { ...tableData, data: action.payload },
				error: '',
			};
		case ViewCompanyTypes.FETCH_VIEW_COMPANY_TABLE_FAILURE:
			return {
				...state,
				loading: false,
				tableData: { ...tableData, data: [] },
				error: action.payload,
			};
		case ViewCompanyTypes.FETCH_VIEW_COMPANY_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewCompanyTypes.FETCH_VIEW_COMPANY_SUCCESS:
			return {
				...state,
				loading: false,
				dialog_open: true,
				companyData: action.payload,
				error: '',
			};
		case ViewCompanyTypes.FETCH_VIEW_COMPANY_FAILURE:
			return {
				...state,
				loading: false,
				companyData: tableData.companyData,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default viewCompanyReducer;
