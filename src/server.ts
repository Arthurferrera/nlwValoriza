import express from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send("Eae caray");
});

app.post("/test-post", (req, res) => {
  return res.send("Eae post");
});

// Server running port
app.listen(3000, () => console.log("Server is running..."));
