import nextConnect from "next-connect";
import middleware from "middleware/db";

const handler = nextConnect();

const COLLECTION = "requests";

handler.use(middleware);

// Get all requests
handler.get(async (req, res) => {
  console.log("in requests");
  const doc = await req.db.collection(COLLECTION).find().toArray();
  res.status(200).json(doc);
});

// add a request
handler.post(async (req, res) => {
  console.log(req.body);
  let data = req.body;
  const doc = await req.db.collection(COLLECTION).insert(data);
  res.json({ message: "ok", id: doc });
});

export default (req, res) => handler.apply(req, res);
