# OpenAPI Integration with TanStack Query

## 1. Generate TypeScript Types from OpenAPI

To generate types from the OpenAPI specification, run the following script:

```sh
npm run generate
```

This will create the TypeScript definitions inside:

```
src/types/types.ts
```

## 2. Install Dependencies

Install the required packages:

```sh
npm install openapi-fetch
npm install -D openapi-typescript openapi-typescript-helpers
```

- **`openapi-fetch`**: API client that generates types directly from the OpenAPI schema.
- **`openapi-typescript`**: Generates TypeScript types from the OpenAPI specification.
- **`openapi-typescript-helpers`**: Provides utility functions for working with OpenAPI-generated types.

## 3. Setup the API Client

Configure the API client in [`client.ts`](./src/api/client.ts).

## 4. Create Custom TanStack Query Functions

Define reusable functions for API calls using TanStack Query.

Example: A function to fetch all users is implemented in [`queries.ts`](./src/api/queries/queries.ts).

## 5. Usage 
Use the function in react component [`App.tsx`](./src/App.tsx)

## 6. Testing on your local machine
1. Clone the repo
2. npm i
3. npm run dev
4. check the network logs and console