import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from '../../common/base.entity';

@Schema()
export class Department extends BaseEntity {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: () => ({}) })
  geo: {
    lat: number;
    lng: number;
  };

  @Prop({ type: () => ({}) })
  address: {
    street: string;
    phone: string;
  };

  @Prop()
  workingHours: string;

  @Prop()
  rating: number;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
