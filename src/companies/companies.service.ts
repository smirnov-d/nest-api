import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from './entities/company.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class CompaniesService {
  constructor(
    private readonly userService: UsersService,
    @InjectModel('Company') private readonly companyModel: Model<Company>,
  ) {}

  private async validateAdmins(admins) {
    const existingUser = await this.userService.findAll({
      _id: { $in: admins },
    });
    if (admins.length !== existingUser.length) {
      throw new BadRequestException(`The admins with these IDs not found`);
    }
    return true;
  }

  async create(createCompanyDto: CreateCompanyDto) {
    await this.validateAdmins(createCompanyDto.admins);
    return this.companyModel.create(createCompanyDto);
  }

  async findAll() {
    return `This action returns all companies`;
  }

  async findOne(id: string) {
    return this.companyModel.findOne({ _id: id }); //.populate('admins');
    // return this.companyModel.findById(id);
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    if (updateCompanyDto?.admins) {
      await this.validateAdmins(updateCompanyDto.admins);
    }
    return this.companyModel.findByIdAndUpdate(id, updateCompanyDto);
  }

  async remove(id: string) {
    return this.companyModel.findByIdAndRemove(id);
  }
}
