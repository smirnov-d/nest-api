import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../../auth/enums/role.enum';

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop() // todo: [Roles] or { type: () => ([]) }
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
