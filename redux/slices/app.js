import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../store';

const initialState = {
  sidebar: {
    open: true,
  },
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toogleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    }
  },
});

export default slice.reducer;

export function ToggleSidebar() {
  return async () => {
    dispatch(slice.actions.toogleSidebar());
  };
}

