import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Department } from '../../departments/entities/department.entity';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/entities/user.entity';

@Schema()
export class Company {
  //  extends BaseEntity implements Document
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }] })
  // admins: mongoose.Schema.Types.Array<MongooseSchema.Types.ObjectId>;
  admins: User[];
  // admins: Set<User>;

  @Prop()
  departments: Department[];
  // departments: Set<Department>;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
