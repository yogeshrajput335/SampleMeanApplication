import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";
 
export const clientRouter = express.Router();
clientRouter.use(express.json());
 
clientRouter.get("/", async (_req, res) => {
   try {
       const clients = await collections.clients.find({}).toArray();
       res.status(200).send(clients);
   } catch (error) {
       res.status(500).send(error.message);
   }
});

clientRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const client = await collections.clients.findOne(query);
  
        if (client) {
            res.status(200).send(client);
        } else {
            res.status(404).send(`Failed to find an client: ID ${id}`);
        }
  
    } catch (error) {
        res.status(404).send(`Failed to find an client: ID ${req?.params?.id}`);
    }
 });

 clientRouter.post("/", async (req, res) => {
    try {
        const client = req.body;
        const result = await collections.clients.insertOne(client);
  
        if (result.acknowledged) {
            res.status(201).send(`Created a new client: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new client.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
 });

 clientRouter.put("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const client = req.body;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.clients.updateOne(query, { $set: client });
  
        if (result && result.matchedCount) {
            res.status(200).send(`Updated an client: ID ${id}.`);
        } else if (!result.matchedCount) {
            res.status(404).send(`Failed to find an client: ID ${id}`);
        } else {
            res.status(304).send(`Failed to update an client: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
 });

 clientRouter.delete("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.clients.deleteOne(query);
  
        if (result && result.deletedCount) {
            res.status(202).send(`Removed an client: ID ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove an client: ID ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Failed to find an client: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
 });