1. Generate the types first, in my case I've created a script "npm generate", which is generating types from OpenAPI Spec in the src/types/types.ts file.
2. Now we need to install some packages
     npm install openapi-fetch (The API client, generates types directly from the OpenAPI schema.)
     npm install -D openapi-typescript (used to generate types from OpenAPI Spec)
     npm install -D openapi-typescript-helpers (utility package)

3. Setup the API client [link](./src/api/client.ts)
4. Create custom tan stack query hooks. For demonstrating, I've creating GetAllUsers hook. [link](./src/api/hooks/hooks.ts)
