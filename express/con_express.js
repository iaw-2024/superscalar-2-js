const fs = require("node:fs");
let tableData = null;

fs.readFile("express/datos.json", 'utf8', (err, data) => {
	console.log(new Date());
	if (err) {
		console.error(err);
		return;
	}
	tableData = { productos: JSON.parse(data) };
});

let getTableData = () => tableData;
module.exports.getTableData = getTableData;