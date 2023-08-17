import * as mongodb from "mongodb";
 
export interface teacher {
   name: string;
   subject: string;
   phonenumber : string;
   _id?: mongodb.ObjectId;
}