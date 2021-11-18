import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Form from "./inputForm";
import Table from "./table/table";

const App = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<div className="container">
					<h1 className="center-align">Hello!!!</h1>
					<Form />
					<Table />
				</div>
			</Provider>
		</React.StrictMode>
	);
};

export default App;
