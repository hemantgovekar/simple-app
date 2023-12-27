const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = "3000";
const adminRouter = require('./router/admin')


app.use(bodyParser.json())

app.use("/admin", adminRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} `);
})