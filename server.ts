import Express from "express";
import database from "./models/database";
import userRouter from "./routes/user";

const app = Express();

app.use(userRouter);

app.listen(process.env.PORT, () =>
  console.log(`Started listening on port ${process.env.PORT}`)
);
