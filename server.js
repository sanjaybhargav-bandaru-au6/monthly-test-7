var express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const dotenv = require("dotenv");
dotenv.config();
require("./db");
const cors = require('cors')
var app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(apiRoutes);
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
	console.log("Server is running at port", PORT);
});
