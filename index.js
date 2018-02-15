require('dotenv').config();

const app = require('./src/server')();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App server is running at port :${port}`);
});