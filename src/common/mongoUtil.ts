import { Document } from 'mongoose';

export const convertDocumentToObject = <T extends Document, D>(
  document: T
): D =>
  document.toObject({
    getters: true,
    transform: function(_, ret) {
      delete ret._id;
    }
  }) as D;
