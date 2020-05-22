import { combineReducers } from 'redux';

import sidebarReducer from './sidebar/sidebar.reducers';
import routesReducer from './routes/routes.reducer';
import viewStudentsReducer from './view-students/view.students.reducer';
import viewApproveStudentReducer from './approve_students/approve.students.reducer';

export default combineReducers({
	sidebar: sidebarReducer,
	routes: routesReducer,
	viewStudents: viewStudentsReducer,
	viewApproveStudents: viewApproveStudentReducer,
});
