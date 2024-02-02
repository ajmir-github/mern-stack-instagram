// env
import dotenv from "dotenv";
dotenv.config();
// imports
import { connectToDatabase } from "@/utils/MongoDB";
import router from "@/routes";
import createApp from "./app";

// vars
const PORT = process.env.PORT || "3000";
const CLIENT_URL = process.env.CLIENT_URL || "*";

const app = createApp({
  corsOptions: {
    origin: CLIENT_URL,
    credentials: true,
  },
  router,
});

connectToDatabase
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `SERVER IS LISTEING TO:\n\tPORT:${PORT}  CLIENT_URL:${CLIENT_URL}`
      )
    );
  })
  .catch(console.error);
