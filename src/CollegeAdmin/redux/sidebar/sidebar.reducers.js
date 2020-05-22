import { SidebarActions } from './sidebar.types';
import { menuItems } from './menu.items';
const INITIAL_STATE = {
	Home: true,
	College: false,
	Company: false,
	Student: false,
	menu_item: menuItems,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SidebarActions.SET_OPEN:
			return {
				...state,
				[action.payload]: !state[action.payload],
			};
		default:
			return state;
	}
};

export default sidebarReducer;
