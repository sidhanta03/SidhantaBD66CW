const cors = require("cors");
const express = require("express");
const { getAllEmployees, getEmployeesById } = 
  require("./controllers/index");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
})

//Exercise 1: Retrieve All Employees
app.get("/employees", async (req, res) => {
  const employees =  getAllEmployees();
  res.json({ employees })
});

//Exercise 2: Retrieve Employee by ID
app.get("/employees/details/:id", async (req, res) => {
  let employee = getEmployeesById(parseInt(req.params.id));

  res.json({ employee })
});

module.exports = {
  app
};
