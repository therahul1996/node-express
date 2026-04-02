import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from "./config/db";
import UserRoutes from "./routes/UserRoutes";

dotenv.config()
connectDB()

const app = express();
app.use(cors())
app.use("/api/users", UserRoutes);
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express & TypeScript Server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
