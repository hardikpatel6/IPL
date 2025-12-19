import { server } from "./graphql/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const start = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
  });
  console.log(`🚀 Local dev server running at ${url}`);
};

start();
