import createClient from "openapi-fetch";
import type { paths } from "./types/types";
import { myMiddleware } from "./middlewares/middlewares";

export const client = createClient<paths>({
  baseUrl: "https://rasoi.saudebazi.com",
});

client.use(myMiddleware);
