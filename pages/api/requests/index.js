import nextConnect from "next-connect";
import middleware from "middleware/db";

const handler = nextConnect();

const COLLECTION = "requests";

handler.use(middleware);

handler.get(async (req, res) => {
  console.log("in requests");
  const doc = await req.db.collection(COLLECTION).find().toArray();
  res.json(doc);
});

handler.post(async (req, res) => {
  console.log(req.body);
  let data = req.body;
  const doc = await req.db.collection(COLLECTION).insert(data);
  res.json({ message: "ok", id: doc });
});

export default (req, res) => handler.apply(req, res);
