import createClient from "openapi-fetch";
import type { paths } from "./types/types";

export const client = createClient<paths>({
  baseUrl: "https://rasoi.saudebazi.com",
});
