import mongoose, { Schema, Model, Document } from 'mongoose';
import { IBaseModel } from '../common/baseModel';

export interface IHelloModel extends IBaseModel {
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
