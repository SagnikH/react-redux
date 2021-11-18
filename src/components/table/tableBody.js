import React from "react";
import { useSelector } from "react-redux";

const Body = () => {
    let counter = 0;
	const transactions = useSelector((state) => state.tracker);
	console.log(transactions);

	const transactionData = transactions.map((transaction) => {
		return (
			<tr key={counter++}>
				<td>{transaction.date}</td>
				<td>{transaction.type === "earnings" ? transaction.amount : "--"}</td>
				<td>
					{transaction.type === "expenditures" ? transaction.amount : "--"}
				</td>
			</tr>
		);
	});

	return <React.Fragment>{transactionData}</React.Fragment>;
};

export default Body;
