import { ViewDateTypes } from './approve.date.types';
import { unapprovedTableData } from './approve.date.tableData';
const INITIAL_STATE = {
	view_date_dialog_open: false,
	reject_date_dialog_open: false,
	unapprovedTableData: unapprovedTableData,
	loading: false,
	error: '',
	tableModified: {},
	dateData: {
		_id: '',
		company_name: '',
		email: 'sd@.com',
		phase: '',
		requested_date: {
			$date: {
				$numberLong: '0',
			},
		},
	},
	approvedTableData: unapprovedTableData,
};

const viewApproveDateReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ViewDateTypes.TOGGLE_VIEW_DATE_DIALOG:
			return {
				...state,
				view_date_dialog_open: !state.view_date_dialog_open,
				dateData: action.payload,
			};
		case ViewDateTypes.TOGGLE_REJECT_DATE_DIALOG:
			return {
				...state,
				reject_date_dialog_open: !state.reject_date_dialog_open,
			};
		case ViewDateTypes.FETCH_APPROVE_DATE_TABLE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewDateTypes.FETCH_APPROVE_DATE_TABLE_SUCCESS:
			return {
				...state,
				loading: false,
				unapprovedTableData: { ...unapprovedTableData, data: action.payload },
				error: '',
			};
		case ViewDateTypes.FETCH_APPROVE_DATE_TABLE_FAILURE:
			return {
				...state,
				loading: false,
				unapprovedTableData: { ...unapprovedTableData, data: [] },
				error: action.payload,
			};
		case ViewDateTypes.PUT_APPROVE_DATE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewDateTypes.PUT_APPROVE_DATE_SUCCESS:
			return {
				...state,
				loading: false,
				view_date_dialog_open: false,
				tableModified: action.payload,
				error: '',
			};
		case ViewDateTypes.PUT_APPROVE_DATE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case ViewDateTypes.REJECT_APPROVE_DATE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewDateTypes.REJECT_APPROVE_DATE_SUCCESS:
			return {
				...state,
				loading: false,
				view_date_dialog_open: false,
				reject_date_dialog_open: false,
				tableModified: action.payload,
				error: '',
			};
		case ViewDateTypes.REJECT_APPROVE_DATE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case ViewDateTypes.FETCH_PENDING_DATE_TABLE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ViewDateTypes.FETCH_PENDING_DATE_TABLE_SUCCESS:
			return {
				...state,
				loading: false,
				approvedTableData: { ...unapprovedTableData, dataPending: action.payload },
				error: '',
			};
		case ViewDateTypes.FETCH_PENDING_DATE_TABLE_FAILURE:
			return {
				...state,
				loading: false,
				approvedTableData: { ...unapprovedTableData, dataPending: [] },
				error: action.payload,
			};
		default:
			return state;
	}
};

export default viewApproveDateReducer;
