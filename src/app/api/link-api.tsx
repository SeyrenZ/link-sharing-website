import express, { Request, Response } from "express";
import mongoose, { Document } from "mongoose";
import connect from "@/utils/db"; // Your existing DB connection logic
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

interface ILink extends Document {
  timestamp: number;
  name: string;
  platform: string;
  url: string;
}

// Link Schema matching the LinkType interface
const linkSchema = new mongoose.Schema<ILink>({
  timestamp: Number,
  name: String,
  platform: String,
  url: String,
});

const Link = mongoose.model<ILink>("Link", linkSchema);

// Connect to the database
connect();

// POST /links to add a new link
app.post("/links", async (req: Request, res: Response) => {
  try {
    const link = new Link(req.body);
    await link.save();
    res.status(201).send(link);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET /links to retrieve all links
app.get("/links", async (req: Request, res: Response) => {
  try {
    const links = await Link.find({});
    res.status(200).send(links);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PUT /links/:id to update a link's platform
app.put("/links/:id", async (req: Request, res: Response) => {
  try {
    const link = await Link.findByIdAndUpdate(
      req.params.id,
      { platform: req.body.platform },
      { new: true }
    );
    if (!link) {
      return res.status(404).send();
    }
    res.send(link);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE /links/:timestamp to delete a link by timestamp
app.delete("/links/:timestamp", async (req: Request, res: Response) => {
  try {
    const link = await Link.findOneAndDelete({
      timestamp: req.params.timestamp,
    });
    if (!link) {
      return res.status(404).send();
    }
    res.send(link);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
