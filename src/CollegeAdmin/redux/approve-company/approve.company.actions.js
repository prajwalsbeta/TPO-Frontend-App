import { ViewCompanyTypes } from './approve.company.types';

export const toggleViewApproveCompanyDialog = () => ({
	type: ViewCompanyTypes.TOGGLE_VIEW_COMPANY_DIALOG,
});

export const toggleRejectCompanyDialog = () => ({
	type: ViewCompanyTypes.TOGGLE_REJECT_COMPANY_DIALOG,
});
