import {
  ArrayNotEmpty,
  ArrayUnique,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';
import { User } from '../../users/entities/user.entity';
import { Department } from '../../departments/entities/department.entity';

export class CreateCompanyDto {
  @IsNotEmpty()
  title: string;

  @MaxLength(256)
  description: string;

  @ArrayUnique()
  @ArrayNotEmpty()
  admins: Array<User>;
  // admins: Set<User>;

  @ArrayUnique()
  departments: Department[];
  // departments: Set<Department>;
}
