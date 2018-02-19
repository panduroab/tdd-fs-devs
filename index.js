require('dotenv').config();

const dependencies = require('./src/dependencies')();
const app = require('./src/server')(dependencies);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App server is running at port :${port}`);
});

//https://investingwidgets.com/crypto-currency-rates?theme=darkTheme&hideTitle=true&pairs=945629,997650,1010798,1010782
//wss://stream121.forexpros.com:443/echo/118/edw4h_0q/websocket
/**
 var newWindow = window.open();
var addedGlobals = Object.keys(window).filter(key => !newWindow.hasOwnProperty(key));
addedGlobals.map(name=>console.log(name,': ',window[name]));
 */