import * as mongodb from "mongodb";
 
export interface Patientys {
   name: string;
   location: string;
   technology: string;
   _id?: mongodb.ObjectId;
}
