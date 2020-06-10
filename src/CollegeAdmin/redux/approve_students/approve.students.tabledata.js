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
			name: 'Ash Ash',
			class: 'TE',
			department: 'EnTC',
			rollNo: '102CS30',
		},
		{
			srNo: 2,
			name: 'bob B',
			class: 'TE',
			department: 'Computer',
			rollNo: '100CS20',
		},
		{
			srNo: 3,
			name: 'tim C',
			class: 'BE',
			department: 'Civil',
			rollNo: '100CV10',
		},
		{
			srNo: 4,
			name: 'Sam N',
			class: 'SE',
			department: 'Mechinical',
			rollNo: '100EE01',
		},
	],
};
