import { client } from "../client";
import {
  UseQueryOptions as RQUseQueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { HttpMethod, PathsWithMethod } from "openapi-typescript-helpers";
import { FetchOptions } from "openapi-fetch";
import { paths } from "../types/types";

type UseQueryOptions = Pick<RQUseQueryOptions, "enabled">;

// Infer the path and params types from OpenAPI Spec
type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>;
type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P]
  ? FetchOptions<paths[P][M]>
  : never;

export function GetAllUsers<P extends Paths<"get">>(
  path: P,
  params: Params<"get", P> & { rq?: UseQueryOptions }
) {
  return useQuery({
    queryKey: [],
    queryFn: async () => {
      const { data, error } = await client.GET(path, params);
      if (error) throw error;
      return data;
    },
    ...params,
  });
}
