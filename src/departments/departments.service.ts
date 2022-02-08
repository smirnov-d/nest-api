import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, ObjectId } from 'mongoose';
import { Department } from './entities/department.entity';

type Dep = Department & Document;

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel(Department.name) private readonly departmentModel: Model<Dep>,
  ) {
    console.log('test', Department.name);
  }

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    return this.departmentModel.create(createDepartmentDto);
    // return 'This action adds a new department';
  }

  async findAll(): Promise<Department[]> {
    return this.departmentModel.find();
    // return `This action returns all departments`;
  }

  async findOne(id: string): Promise<Department> {
    return this.departmentModel.findOne({ _id: id });
    // return `This action returns a #${id} department`;
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentModel.updateOne({ _id: id }, updateDepartmentDto);
    // return `This action updates a #${id} department`;
  }

  async remove(id: string) {
    return this.departmentModel.deleteOne({ _id: id });
    // return `This action removes a #${id} department`;
  }
}
