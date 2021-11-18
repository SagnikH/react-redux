import { createSlice } from "@reduxjs/toolkit";

export const trackerSlice = createSlice({
	name: "tracker",
	initialState: [
		{ date: "21-10-2021", amount: 2000, type: "earnings" },
		{ date: "19-07-2019", amount: 400, type: "expenditures" },
	],
	reducers: {
		addTransactions: (state, action) => {
			const transaction = {
				date: action.payload.date,
				amount: action.payload.amount,
				type: action.payload.type,
			};

			state.push(transaction);
		},
	},
});

export const { addTransactions } = trackerSlice.actions;

export default trackerSlice.reducer;
