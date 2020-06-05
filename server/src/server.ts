import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("listagem de usuários");
  res.send("hello big! denovo");
});

app.listen(3333);
