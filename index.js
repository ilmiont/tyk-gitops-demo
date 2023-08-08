const express = require("express");

const expressServer = express();

expressServer.get("/time", (request, response) => {
	response.send(new Date());
});

expressServer.listen(3000, () => {
	console.log(`Ready.`);
});
