export const tableData = {
	columns: [
		{ title: 'SR.NO', field: 'id', type: 'numeric' },
		{ title: 'Name', field: 'full_name' },
		{ title: 'Class', field: 'class', lookup: { FE: 'FE', SE: 'SE', TE: 'TE', BE: 'BE' } },
		{ title: 'Department', field: 'department' },
		{ title: 'Roll No.', field: 'roll_number' },
	],
	data: [
		{
			srNo: 1,
			name: 'mat',
			class: 'TE',
			department: 'Computer',
			rollNo: '102CS30',
		},
		{
			srNo: 2,
			name: 'bob',
			class: 'TE',
			department: 'Computer',
			rollNo: '100CS20',
		},
		{
			srNo: 3,
			name: 'tim',
			class: 'BE',
			department: 'Civil',
			rollNo: '100CV10',
		},
		{
			srNo: 4,
			name: 'Sam',
			class: 'SE',
			department: 'Electrical',
			rollNo: '100EE01',
		},
	],
};
