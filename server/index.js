const express = require("express");
const App = express();
const port = 5000;
const cors = require("cors");
App.use(express.json());
App.use(cors());

// App.use();
// App.use()

App.listen(port, () => {
  console.log(  `App listening on http://127.0.0.1:${port}`)  ;
});