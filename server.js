import express from "express";
import router from "./utils/router.js"
import { connectDB } from "./config/db.js";

const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/url", router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
})