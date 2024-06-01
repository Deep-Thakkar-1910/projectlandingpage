// models/Email.ts
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEmail extends Document {
  email: string;
}

const EmailSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
});

const Email: Model<IEmail> =
  mongoose.models.Email || mongoose.model<IEmail>("Email", EmailSchema);

export default Email;
