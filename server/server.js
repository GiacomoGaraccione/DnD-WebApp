const express = require("express");
const dao = require("./dao.js");
const cookieParser = require("cookie-parser");
const jwt = require("express-jwt");
const jsonwebtoken = require("jsonwebtoken");
const expireTime = 1800;
const jwtSecret =
  "nfRdsLgEKmpveusyJttW4ruRR3ZkYaVsSOagpbLPgCNjH6BDOvS01vBkEL6HXlZIqTl1lbrJYvniVRECcU1TIuO8xExiWiAKRtG0BOAEc3aEQDvaZszXsovzAAr0rP";

const PORT = 3001;

const app = new express();

app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);

/*
app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  dao
    .checkPassword(username, password)
    .then(() => {
      const token = jsonwebtoken.sign({ user: username }, jwtSecret, {
        expiresIn: expireTime,
      });
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: true,
        maxAge: 1000 * expireTime,
      });
      res.end();
    })
    .catch((err) => {
      console.log("Error in dao.checkPassword", err);
      res.status(401).end();
    });
});

app.post("/api/logout", (req, res) => {
  res.clearCookie("token").end();
});

app.use(cookieParser());

app.use(
  jwt({
    secret: jwtSecret,
    getToken: (req) => req.cookies.token,
    algorithms: ["HS256"],
  })
);
*/
