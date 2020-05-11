import nextConnect from "next-connect";
import middleware from "middleware/db";
import { ObjectId } from "mongodb";

const handler = nextConnect();

const COLLECTION = "requests";

handler.use(middleware);

handler.get(async (req, res) => {
  const {
    query: { requestId },
  } = req;
  console.log(requestId);
  const doc = await req.db
    .collection(COLLECTION)
    .findOne({ _id: ObjectId(requestId) });
  res.json(doc);
});

handler.put(async (req, res) => {
  const {
    query: { requestId },
    body,
  } = req;
  console.log(requestId);
  console.log(body);

  const doc = await req.db.collection(COLLECTION).findOneAndUpdate(
    { _id: ObjectId(requestId) },
    { $set: body },
    {
      upsert: true,
      returnOriginal: false,
    }
  );
  res.json(doc);
});

handler.delete(async (req, res) => {
  const {
    query: { requestId },
  } = req;
  console.log(requestId);
  const doc = await req.db
    .collection(COLLECTION)
    .deleteOne({ _id: ObjectId(requestId) });
  res.json({ message: doc.deletedCount === 1 ? "ok" : "no doc exists for id" });
});

export default (req, res) => handler.apply(req, res);
