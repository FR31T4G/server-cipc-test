const { json } = require('express');
const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes');


const port = 3333;
const hostname='https://server-test-cip.herokuapp.com';

app.use(cors({origin:true}));
app.use(express.json());
app.use(routes);
//PORTAs
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
