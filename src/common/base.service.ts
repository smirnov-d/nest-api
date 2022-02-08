import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { Department } from '../departments/entities/department.entity';
import { BaseEntity } from './base.entity';

@Injectable()
export class BaseService<T extends BaseEntity> {
  // todo: add base service
  constructor(
    @InjectModel(Department.name)
    private readonly departmentModel: Model<T & Document>,
  ) {}
}
