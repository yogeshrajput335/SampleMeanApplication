import * as mongodb from "mongodb";
 
export interface Client {
   name: string;
   location: string;
   technology: string;
   _id?: mongodb.ObjectId;
}
