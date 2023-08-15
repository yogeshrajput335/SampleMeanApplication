import * as mongodb from "mongodb";
 
export interface Student {
   name: string;
   class: string;
   phonenumber: string;
   _id?: mongodb.ObjectId;
}
