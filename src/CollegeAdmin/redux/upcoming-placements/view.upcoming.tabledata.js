export const tableData = {
	columns: [
		{ title: 'SR.NO', field: 'tableData.id' + 1, type: 'numeric' },
		{ title: 'Company Name', field: 'company_name' },
		{ title: 'Email', field: 'email', type: 'string' },
		{ title: 'Date', field: 'c_date', defaultSort: 'asc' },
		{ title: 'Phase', field: 'phase_title', type: 'string' },
	],
	data: [],
	upcomingData: {
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
