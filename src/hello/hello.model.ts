import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IHelloModel {
  word: string;
}

export type HelloDocument = IHelloModel & Document;

const collectionName = 'hello';

const HelloSchema = new Schema(
  {
    word: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const HelloModel: Model<HelloDocument> = mongoose.model(
  collectionName,
  HelloSchema
);
