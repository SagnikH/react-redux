// eslint-disable-next-line
import React, { useState, useEffect } from "react";

const Form = () => {
	const [firstname, setFirstname] = useState("");
	const [selectValue, setSelectValue] = useState("");

	const onSubmitClick = (e) => {
		e.preventDefault();

		console.log("submit");
	};

	const handleChange = (e) => {
		// console.log(e);
		setSelectValue(e.target.value);
	};

	//NOTE : always access a state variable after change from inside the useEffect function,
	//		 since react may batch multiple setState(){or useState() for hooks} calls for update
	useEffect(() => {
		console.log(selectValue);
	}, [selectValue]);

	return (
		<div className="row">
			<form className="col s8" onSubmit={onSubmitClick}>
				<div className="row">
					<div className="input-field col s10 offset-s4">
						<input
							placeholder="Enter amount"
							id="amount"
							type="text"
							className="validate"
							autoComplete="off"
						/>
						<label htmlFor="amount">Amount</label>
					</div>
					<div className="input-field col s10 offset-s4">
						<select onChange={handleChange} value={selectValue}>
							<option value="" disabled>
								Choose your option
							</option>
							<option value="earnings">Earnings</option>
							<option value="spendings">Spendings</option>
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
