export const tableData = {
	columns: [
		{ title: 'SR.NO', field: 'srNo', type: 'numeric' },
		{ title: 'Name', field: 'name' },
		{ title: 'Class', field: 'class', lookup: { FE: 'FE', SE: 'SE', TE: 'TE', BE: 'BE' } },
		{ title: 'Department', field: 'department' },
		{ title: 'Roll No.', field: 'rollNo' },
	],
	data: [
		{
			srNo: 1,
			name: 'asdf',
			class: 'TE',
			department: 'Computer',
			rollNo: '100CS00',
		},
		{
			srNo: 1,
			name: 'asdf',
			class: 'TE',
			department: 'Computer',
			rollNo: '100CS00',
		},
		{
			srNo: 1,
			name: 'asdf',
			class: 'TE',
			department: 'Computer',
			rollNo: '100CS00',
		},
		{
			srNo: 1,
			name: 'asdf',
			class: 'TE',
			department: 'Computer',
			rollNo: '100CS00',
		},
	],
};
