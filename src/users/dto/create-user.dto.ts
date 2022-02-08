import { IsEmail, IsNotEmpty, ArrayUnique, ArrayContains, IsEnum } from 'class-validator'
import { Role } from '../../auth/enums/role.enum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  // @ArrayUnique()
  // @ArrayContains([Role.User])
  @IsNotEmpty()
  // @IsEnum(Role)
  roles: Role[];
}
