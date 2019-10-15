const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 1337;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require("./routes/routing")(app);

app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });