const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express();
const PORT = 5000;
const baseUrl = `https://api.deezer.com`;
const options = {
  method: "GET",
  headers: {},
};

app.get("/user/5/playlists", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    let response = await fetch(baseUrl + req.originalUrl, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

app.get("/playlist/:id", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    let response = await fetch(baseUrl + req.originalUrl, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

app.get("/playlist/:id/tracks", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    let response = await fetch(baseUrl + req.originalUrl, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
