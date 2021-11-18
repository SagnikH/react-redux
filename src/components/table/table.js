import TableBody from "./tableBody";

const Table = () => {
	return (
		<div className="row">
            <div className="col s10 offset-s1">
                <table className="responsive-table centered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Earnings</th>
                            <th>Expenditures</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableBody />
                    </tbody>
                </table>
            </div>
		</div>
	);
};

export default Table;
