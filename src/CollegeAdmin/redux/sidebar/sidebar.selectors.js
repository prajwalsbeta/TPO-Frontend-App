import { createSelector } from 'reselect';

export const selectSidebar = (state) => state.sidebar;

export const selectMenuItems = createSelector([selectSidebar], (sidebar) => sidebar.menu_item);
