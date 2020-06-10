export const unapprovedTableData = {
	columns: [
		{ title: 'SR.NO', field: 'srNo', type: 'numeric' },
		{ title: 'Company Name', field: 'name', type: 'string' },
		{ title: 'Email', field: 'email', type: 'string' },
		{ title: 'Requested Date', field: 'R_date', type: 'date' },
		{ title: 'Phase', field: 'phase', type: 'string' },
	],
	data: [
		{
			srNo: 1,
			name: 'Amazon',
			email: 'jeff@amazon.in',
			R_date: '10/08/2020',
			phase: 'Phase 1',
		},
		{
			srNo: 2,
			name: 'Dell',
			R_date: '19/10/2020',
			phase: 'Phase 2',
			email: 'deff@dell.in',
		},
		{
			srNo: 3,
			name: 'Amazon',
			R_date: '15/08/2020',
			phase: 'Phase 1',
			email: 'bob@amazon.in',
		},
		{
			srNo: 4,
			name: 'TCS',
			R_date: '10/09/2020',
			phase: 'Phase 3',
			email: 'sam@tcs.in',
		},
	],
};
