import { Middleware } from "openapi-fetch";
import { callRandomApi } from "../utils";
import { StatusCodes } from "../../enums";

export const myMiddleware: Middleware = {
  //   async onRequest({ request }) {
  //     request.headers.set("foo", "bar");
  //     return request;
  //   },
  async onResponse({ request, response }) {
    if (response.status === StatusCodes.UNAUTHORIZED) {
      const data = await callRandomApi();
      if (data) {
        console.log(
          "Data received from callRandomApi, retrying failed request"
        );
        const retryResponse = await fetch(request);
        return retryResponse;
      }
    }
    return response;
  },
  //   async onError({ error }) {
  //     // wrap errors thrown by fetch
  //     onError({ error }) {
  //       return new Error("Oops, fetch failed", { cause: error });
  //     }
  //   },
};
