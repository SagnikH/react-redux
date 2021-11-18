// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useDispatch } from "react-redux";
import { addTransactions } from "./redux/trackerSlice";

const Form = () => {
	const [amount, setAmount] = useState(0);
	const [type, setType] = useState("");
	const [date, setDate] = useState("");
	const dispatch = useDispatch();

	const initMaterialize = () => {
		var elems = document.querySelectorAll(".datepicker");
		var instances = M.Datepicker.init(elems, {
			format: "dd-mm-yyyy",
			onSelect: (date) => {
				handleDateChange(date);
			},
		});

		var elems = document.querySelectorAll("select");
		var instances = M.FormSelect.init(elems);
	};

	useEffect(() => {
		initMaterialize();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(
			addTransactions({
				date,
				amount,
				type,
			})
		);

		setAmount(0);
		setDate("");
		setType("");
		
		console.log(e);
	};

	const handleOptionChange = (e) => {
		setType(e.target.value);
	};

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};

	const handleDateChange = (e) => {
		const date = `${e.getDate()}-${e.getMonth()}-${e.getFullYear()}`;
		setDate(date);
	};

	//NOTE : always access a state variable after change from inside the useEffect function,
	//		 since react may batch multiple setState(){or useState() for hooks} calls for update
	useEffect(() => {}, [amount, date]);

	return (
		<div className="row">
			<form className="col s8" onSubmit={handleSubmit}>
				<div className="row">
					<div className="input-field col s10 offset-s4">
						<input
							onChange={handleAmountChange}
							value={amount}
							placeholder="Enter amount"
							id="amount"
							type="number"
							className="validate"
							autoComplete="off"
						/>
						<label htmlFor="amount">Amount</label>
					</div>
					<div className="input-field col s10 offset-s4">
						<select onChange={handleOptionChange} value={type}>
							<option value="" disabled>
								Choose your option
							</option>
							<option value="earnings">Earnings</option>
							<option value="expenditures">Expenditures</option>
						</select>
						<label>Select Type</label>
					</div>
					<div className="input-field col s10 offset-s4">
						<input
							id="date"
							placeholder="Pick a date"
							type="text"
							className="datepicker"
							autoComplete="off"
						/>
						<label htmlFor="date">Choose Date</label>
					</div>
				</div>
				<button className="btn waves-effect waves-light input-field col s10 offset-s4">
					Submit
					<i className="material-icons right">send</i>
				</button>
			</form>
		</div>
	);
};

export default Form;
