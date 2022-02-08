import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsObject,
  IsOptional,
} from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsObject()
  geo: {
    // @IsLatitude()
    lat: number;
    // @IsLongitude()
    lng: number;
  };
}
