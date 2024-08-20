import  { Schema, model } from 'mongoose';
import { IContacts } from "@/resources/contacts/contacts.interface";

const ContactsSchema: Schema = new Schema(
  {
    customerId: { type: String, required: true },
    contactName: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  { timestamps: true }
);

const Contacts = model<IContacts>('Contacts', ContactsSchema);

export default Contacts;