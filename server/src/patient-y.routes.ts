import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";
 
export const patientyRouter = express.Router();
patientyRouter.use(express.json());
 
patientyRouter.get("/", async (_req, res) => {
   try {
       const patientys = await collections.patientys.find({}).toArray();
       res.status(200).send(patientys);
   } catch (error) {
       res.status(500).send(error.message);
   }
});

patientyRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const patient = await collections.patientys.findOne(query);
  
        if (patient) {
            res.status(200).send(patient);
        } else {
            res.status(404).send(`Failed to find an patient: ID ${id}`);
        }
  
    } catch (error) {
        res.status(404).send(`Failed to find an patient: ID ${req?.params?.id}`);
    }
 });

 patientyRouter.post("/", async (req, res) => {
    try {
        const patient = req.body;
        const result = await collections.patientys.insertOne(patient);
  
        if (result.acknowledged) {
            res.status(201).send(`Created a new patient: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new patient.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
 });

 patientyRouter.put("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const patient = req.body;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.patientys.updateOne(query, { $set: patient });
  
        if (result && result.matchedCount) {
            res.status(200).send(`Updated an patient: ID ${id}.`);
        } else if (!result.matchedCount) {
            res.status(404).send(`Failed to find an patient: ID ${id}`);
        } else {
            res.status(304).send(`Failed to update an patient: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
 });

 patientyRouter.delete("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.patientys.deleteOne(query);
  
        if (result && result.deletedCount) {
            res.status(202).send(`Removed an patient: ID ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove an patient: ID ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Failed to find an patient: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
 });