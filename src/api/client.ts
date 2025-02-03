import createClient from "openapi-fetch";
import type { paths } from "./types/types";

const baseUrl = "https://rasoi.saudebazi.com";

export const client = createClient<paths>({ baseUrl });
