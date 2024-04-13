let makeTable = () => {
	let table = document.createElement("table");
	table.setAttribute("id", "dataTable");
	return table;
}

let makeTableHeader = (row) => {
	let thead = document.createElement("thead");
	let tr = document.createElement("tr");
	let th;

	for (property in row) {
		th = document.createElement("th");
		th.textContent = property;
		tr.appendChild(th);
	}
	thead.appendChild(tr);
	return thead;
}

let makeRow = (rowData) => {
	let tr = document.createElement("tr");
	let td;

	for (prop in rowData) {
		td = document.createElement("td");
		td.classList.add(prop);
		td.textContent = rowData[prop];
		tr.appendChild(td);
	}

	return tr;
}