import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());//this middleware will parse json bodies : req.body
app.use(rateLimiter);

//our simple custom middleware
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });
app.use("/api/notes", notesRoutes);
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on port:", PORT);
    });
});
//mongodb+srv://pnagpalbe22:admin@cluster0.orueu8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0