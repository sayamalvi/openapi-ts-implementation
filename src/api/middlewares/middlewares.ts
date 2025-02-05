import { Middleware } from "openapi-fetch";
import { callRandomApi } from "../utils";
import { StatusCodes } from "../../enums";

export const myMiddleware: Middleware = {
  //   async onRequest({ request }) {
  //     request.headers.set("foo", "bar");
  //     return request;
  //   },
  async onResponse({ request, response }) {
    if (response.status !== StatusCodes.UNAUTHORIZED) {
      return response;
    }
    const data = await callRandomApi();
    if (!data) {
      return response;
    }
    console.log("Data received from callRandomApi, retrying failed request");
    return fetch(request);
  },
  //   async onError({ error }) {
  //     // wrap errors thrown by fetch
  //     onError({ error }) {
  //       return new Error("Oops, fetch failed", { cause: error });
  //     }
  //   },
};
