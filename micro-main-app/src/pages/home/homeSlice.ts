import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StateProps {
    bookTypes: string[];
};

const initialState: StateProps = {
    bookTypes: [],
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        updateBookTypes: (state, action: PayloadAction<string[]>) => {
            state.bookTypes = action.payload;
        },
    },
    extraReducers: builder => {
    },
});

// Action creators are generated for each case reducer function
export const {
    updateBookTypes
} = homeSlice.actions;

export default homeSlice.reducer;
