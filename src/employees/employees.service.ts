import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { Employee } from './schemas/employees.schema';
import { join } from 'path';
import * as fs from 'fs';


@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee.name) private readonly employeeModel: Model<Employee>) {}

  async create(body: CreateEmployeeDto, file: Express.Multer.File) {
    // const createdEmployee = await this.employeeModel.create(body)
    return this.employeeModel.create({
      ...body,
      fileName: file ? file.filename : null,
      filePath: file ? `/uploads/${file.filename}` : null,
    })
  }

  async findAll() {
    return this.employeeModel.find().exec()
  }

  async findById(id: string) {
      return this.employeeModel.findById(new Types.ObjectId(id));

    // const foundEmployee = await this.employeeModel.findById(_id).exec()
    // return foundEmployee
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto, file: Express.Multer.File) {
    const _id = new mongoose.Types.ObjectId(id)
    let employeeData = {...updateEmployeeDto}

      if (file) {
        employeeData = {...employeeData, fileName: file.filename ,
      filePath: `/uploads/${file.filename}` }
      }
    const updatedEmployee = await this.employeeModel.findByIdAndUpdate(_id, employeeData).exec()
    return updatedEmployee
  }

  async remove(id: string): Promise<{message:string}> {
    const fileDoc = await this.employeeModel.findById(id);
        if (!fileDoc) throw new NotFoundException('File not found');
    
        // Remove from local storage
        if (fileDoc.fileName){
        const filePath = join(process.cwd(), 'uploads', fileDoc.fileName);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file from disk:', err);
          }
        });}
    
        // Remove from MongoDB
        await this.employeeModel.findByIdAndDelete(id);
    
        return { message: 'File deleted successfully' };
  }
}
