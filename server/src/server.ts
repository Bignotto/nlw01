import express from "express";

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
  console.log("listagem de usuários");
  res.send("hello big! denovo");
});

app.get("/users/:id", (req, res) => {});

app.listen(3333);
