import { Schema,model, Document } from "mongoose";

export interface userInterFace extends Document {
  name: string;
  email: string;
  age: number;
}

const userSchema = new Schema<userInterFace>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
}, {timestamps: true});

export const User = model<userInterFace>('User', userSchema)