import nextConnect from "next-connect";
import middleware from "../../middleware/db";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const doc = await req.db.collection("requests").findOne();
  res.json(doc);
});

export default (req, res) => handler.apply(req, res);
