import { client } from "../client";
import {
  useMutation,
  UseMutationOptions as RQUseMutationOptions,
} from "@tanstack/react-query";
import { HttpMethod, PathsWithMethod } from "openapi-typescript-helpers";
import { FetchOptions } from "openapi-fetch";
import { paths } from "../types/types";

type UseMutationOptions = Pick<RQUseMutationOptions, "retry">;
type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>;
type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P]
  ? FetchOptions<paths[P][M]>
  : never;

export function usePostMutation<P extends Paths<"post">>(
  path: P,
  options?: UseMutationOptions
) {
  return useMutation({
    mutationFn: async (params: Params<"post", P>) => {
      const { data, error } = await client.POST(path, params);
      if (error) throw error;
      return data;
    },
    ...options
  });
}
