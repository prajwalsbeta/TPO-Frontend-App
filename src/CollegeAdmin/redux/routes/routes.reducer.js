import { routes } from './routes';
const INITIAL_STATE = {
	routes: routes,
};

const routesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default routesReducer;
