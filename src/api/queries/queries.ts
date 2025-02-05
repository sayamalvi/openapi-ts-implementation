import { client } from "../client";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { FetchOptions } from "openapi-fetch";
import { paths } from "../types/types";

type GetAllUsersParams = Omit<FetchOptions<paths["/api/users"]["get"]>, "path">;

export function GetAllUsers(
  params: GetAllUsersParams,
  rqOptions?: UseQueryOptions
) {
  return useQuery({
    queryKey: ["/api/users", params],
    queryFn: async () => {
      const { data, error } = await client.GET("/api/users", params);
      if (error) throw error;
      return data;
    },
    ...rqOptions,
  });
}
