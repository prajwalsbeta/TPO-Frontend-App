export const tableData = {
	columns: [
		{ title: 'SR.NO', field: 'tableData.id', type: 'numeric' },
		{ title: 'Company Name', field: 'company_name' },
		{ title: 'Email', field: 'email', type: 'string' },
		{ title: 'Date', field: 'c_date', type: 'date' },
		{ title: 'Phase', field: 'phase_title', type: 'string' },
	],
	data: [
		{
			srNo: 1,
			name: 'Amazon',
			email: 'jeff@amazon.in',
			date: '10/08/2020',
			phase: 'Phase 1',
		},
		{
			srNo: 2,
			name: 'Dell',
			date: '10/08/2020',
			phase: 'Phase 1',
			email: 'deff@dell.in',
		},
		{
			srNo: 3,
			name: 'TCS',
			date: '10/08/2020',
			phase: 'Phase 1',
			email: 'sam@tcs.in',
		},
		{
			srNo: 4,
			name: 'Amazon',
			date: '10/08/2020',
			phase: 'Phase 1',
			email: 'bob@amazon.in',
		},
	],
	ongoingData: {
		_id: '',
		company_name: '',
		date: {
			$date: {
				$numberLong: '0',
			},
		},
		email: '',
		phase_title: '',
		requirement: 0,
	},
};
