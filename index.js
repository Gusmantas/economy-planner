const express = require("express");
const port = 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, (err) =>{
  if(err) {
    console.log("Server could not be started: ", err);
    return
  }
  console.log(`Server listening on port ${port}`);
})