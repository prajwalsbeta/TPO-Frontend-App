import { SidebarActions } from './sidebar.types';

export const setOpen = (selected) => ({
	type: SidebarActions.SET_OPEN,
	payload: selected,
});
