import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

console.log(process.env.mongoDev);

const client = new MongoClient(process.env.mongoDev, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("open_ppe");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
