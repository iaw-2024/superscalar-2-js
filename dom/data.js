let getTableData = () => {
	let jsonStr = `{
	  "productos": [
	    { "Producto": "Raspberry Pi 4B", "Codigo": "VYEG9OHD6X", "Precio": "$89.000", "Categoria": "Electronica" },
	    { "Producto": "GPU NVIDIA A100", "Codigo": "EOCHIEIUQZ", "Precio": "$1.890.000", "Categoria": "Hardware" },
	    { "Producto": "Arduino Uno", "Codigo": "F2YWEOY7HN", "Precio": "$10.499", "Categoria": "Electronica" },
	    { "Producto": "Arduino Nano V3", "Codigo": "LC5V5QNDPK", "Precio": "$8.990", "Categoria": "Electronica" },
	    { "Producto": "GeForce RTX 2060 Super", "Codigo": "DR5G3EFNHF", "Precio": "$524.999", "Categoria": "Hardware" }
	  ]
	}`;
	return JSON.parse(jsonStr);
}