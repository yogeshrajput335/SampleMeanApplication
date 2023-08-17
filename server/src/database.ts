import * as mongodb from "mongodb";
import { Employee } from "./employee";
import { Student } from "./student";
import { Client } from "./client"
import { teacher } from "./teacher";
 
export const collections: {
   employees?: mongodb.Collection<Employee>;
   students?: mongodb.Collection<Student>;
   clients?: mongodb.Collection<Client>;
   teachers?: mongodb.Collection<teacher>;
} = {};
 
export async function connectToDatabase(uri: string) {
   const client = new mongodb.MongoClient(uri);
   await client.connect();
 
   const db = client.db("SampleMeanApplication");
   await applySchemaValidation(db);
 
   const employeesCollection = db.collection<Employee>("employees");
   const studentsCollection = db.collection<Student>("students");
   const clientsCollection = db.collection<Client>("clients");
   const teacherCollection = db.collection<teacher>("teacher");
   collections.employees = employeesCollection;
   collections.students = studentsCollection;
   collections.clients = clientsCollection;
   collections.teachers = teacherCollection;
}
 
// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Employee model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
   const jsonSchema = {
       $jsonSchema: {
           bsonType: "object",
           required: ["name", "position", "level"],
           additionalProperties: false,
           properties: {
               _id: {},
               name: {
                   bsonType: "string",
                   description: "'name' is required and is a string",
               },
               position: {
                   bsonType: "string",
                   description: "'position' is required and is a string",
                   minLength: 5
               },
               level: {
                   bsonType: "string",
                   description: "'level' is required and is one of 'junior', 'mid', or 'senior'",
                   enum: ["junior", "mid", "senior"],
               },
           },
       },
   };

   const jsonStudentSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "class", "phonenumber"],
        additionalProperties: false,
        properties: {
            _id: {},
            name: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            class: {
                bsonType: "string",
                description: "'position' is required and is a string"
            },
            phonenumber: {
                bsonType: "string",
                description: "'phonenumber' is required and is one of 'junior', 'mid', or 'senior'",
            },
        },
    },
};

const jsonClientSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "location", "technology"],
        additionalProperties: false,
        properties: {
            _id: {},
            name: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            location: {
                bsonType: "string",
                description: "'location' is required and is a string"
            },
            technology: {
                bsonType: "string",
                description: "'technology' is required and is one of 'junior', 'mid', or 'senior'",
            },
        },
    },
};
const jsonTeacherSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "subject", "phonenumber"],
        additionalProperties: false,
        properties: {
            _id: {},
            name: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            subject: {
                bsonType: "string",
                description: "'subject' is required and is a string"
            },
            phonenumber: {
                bsonType: "string",
                description: "'phonenumber' is required"
            },
        },
    },
};
 
   // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db.command({
       collMod: "employees",
       validator: jsonSchema
   }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("employees", {validator: jsonSchema});
       }
   });

   await db.command({
    collMod: "students",
    validator: jsonStudentSchema
}).catch(async (error: mongodb.MongoServerError) => {
    if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection("students", {validator: jsonStudentSchema});
    }
});

await db.command({
    collMod: "clients",
    validator: jsonClientSchema
}).catch(async (error: mongodb.MongoServerError) => {
    if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection("clients", {validator: jsonClientSchema});
    }
});
await db.command({
    collMod: "teachers",
    validator: jsonTeacherSchema
}).catch(async (error: mongodb.MongoServerError) => {
    if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection("teachers", {validator: jsonTeacherSchema});
    }
});
}
