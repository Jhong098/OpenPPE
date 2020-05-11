import nextConnect from "next-connect";
import middleware from "../../middleware/db";

const handler = nextConnect();

const COLLECTION = "requsts";

handler.use(middleware);

handler.get(async (req, res) => {
  const doc = await req.db.collection(COLLECTION).findOne();
  res.json(doc);
});

handler.post(async (req, res) => {
  console.log(req.body);
  let data = req.body;
  const doc = await req.db
    .collection(COLLECTION)
    .updateOne({ date: new Date(data.date) }, { $set: data }, { upsert: true });
  res.json({ message: "ok" });
});

export default (req, res) => handler.apply(req, res);
