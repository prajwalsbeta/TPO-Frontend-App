export const tableData = {
	columns: [
		{ title: 'SR.NO', field: 'tableData.id', type: 'numeric' },
		{ title: 'Name', field: 'full_name' },
		{ title: 'Class', field: 'class', lookup: { FE: 'FE', SE: 'SE', TE: 'TE', BE: 'BE' } },
		{ title: 'Department', field: 'department' },
		{ title: 'Roll No.', field: 'roll_number' },
	],
	data: [],
	studentData: {
		_id: '',
		address: '',
		age: 0,
		avg_marks: {
			$numberDecimal: '',
		},
		certifications_url: '',
		choice_to_avail_placements: true,
		class: '',
		department: '',
		email: '',
		extra_activities: [
			{
				description: '',
				title: '',
			},
		],
		full_name: '',
		gender: '',
		live_backlog: false,
		mobile: '',
		other_qualifications: [
			{
				'board/university': '',
				class: '',
				percentage: {
					$numberDecimal: '',
				},
				year_of_passing: '',
			},
		],
		password: '',
		photograph_url: '',
		profile_completed: true,
		projects: [
			{
				description: '',
				title: '',
			},
		],
		role: '',
		roll_number: '',
		sem_marks: [
			{
				$numberDecimal: '',
			},
		],
		status: '',
	},
};
