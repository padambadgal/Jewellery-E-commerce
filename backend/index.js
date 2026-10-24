import expess from "express";
import dotenv from "dotenv";
// import mongoose from "mongoose";

const app = expess();
const router = expess.Router();

dotenv.config();

app.use(router);

router.get("/", (req, res) => {
    res.send("Hello World");
});
router.get("/user", (req, res) => {
    res.send("Hello User");
});


app.listen(process.env.PORT, () => {
    console.log(`✔ Server is running on port ${process.env.PORT}`);
});

