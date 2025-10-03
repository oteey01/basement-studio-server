import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import mongoose, { Model, Types } from 'mongoose';
import { Employee } from './schemas/employees.schema';
export declare class EmployeesService {
    private readonly employeeModel;
    constructor(employeeModel: Model<Employee>);
    create(body: CreateEmployeeDto, file: Express.Multer.File): Promise<mongoose.Document<unknown, {}, Employee, {}, {}> & Employee & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(mongoose.Document<unknown, {}, Employee, {}, {}> & Employee & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findById(id: string): Promise<(mongoose.Document<unknown, {}, Employee, {}, {}> & Employee & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto, file: Express.Multer.File): Promise<(mongoose.Document<unknown, {}, Employee, {}, {}> & Employee & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
