import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

import { connectDB } from "./data/database.js";
import { saveUserDetails } from "./controllers/subscribe.js";
import { cookieCheck } from "./controllers/cookies.js";

connectDB;

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(5000, () => {
    console.log("server is running on port 5000!");
});

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/set-user-cookie", cookieCheck);

app.post("/subscribe", saveUserDetails);
