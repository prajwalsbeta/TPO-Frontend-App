export const tableData = {
	columns: [
		{ title: 'SR.NO', field: 'tableData.id', type: 'numeric' },
		{ title: 'Company Name', field: 'company_name' },
		{ title: 'Contact Person', field: 'concerned_person.name' },
		{ title: 'Phone No', field: 'concerned_person.contact', type: 'string' },
		{ title: 'Email', field: 'concerned_person.email', type: 'string' },
		{ title: 'Position', field: 'concerned_person.position', type: 'string' },
	],
	data: [],
	companyData: {
		_id: '',
		address: '',
		approved_date: {
			$date: {
				$numberLong: '',
			},
		},
		company_name: '',
		concerned_person: {
			contact: '',
			email: '',
			name: '',
			position: '',
		},
		created_at: {
			$date: {
				$numberLong: '',
			},
		},
		profile_completed: true,
		role: '',
		updated_at: {
			$date: {
				$numberLong: '',
			},
		},
		website: '',
	},
};
