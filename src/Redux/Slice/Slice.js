import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const slice = createSlice({
	name: "test",
	initialState,
	reducers: {},
	extraReducers: {},
});

export const {} = slice.actions;
export default slice.reducer;
