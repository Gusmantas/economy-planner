const express = require("express");
const path = require("path");
const session = require("express-session");
const userRoutes = require("./routes/userRoutes");
const monthRoutes = require("./routes/monthRoutes");
const historyRoutes = require("./routes/historyRoutes");

const port = 5000;
const routePrefix = "/api";
const monthPrefix = "/api/months";
const historyPrefix = "/api/history";
const app = express();

app.use(express.json());
app.use(
  session({
    secret: "tra456wes89!!",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);

app.use(routePrefix, userRoutes);
app.use(monthPrefix, monthRoutes);
app.use(historyPrefix, historyRoutes);

app.use(express.static(path.join(__dirname, "../build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, (err) => {
  if (err) {
    console.log("Server could not be started: ", err);
    return;
  }
  console.log(`Server listening on port ${port}`);
});
