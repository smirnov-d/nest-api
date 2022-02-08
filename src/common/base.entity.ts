import { Document, SchemaTimestampsConfig } from 'mongoose';

export class BaseEntity extends Document {
  created_at: Date;
  updated_at: Date;
}
