import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("./schemas/employees.schema").Employee, {}, {}> & import("./schemas/employees.schema").Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/employees.schema").Employee, {}, {}> & import("./schemas/employees.schema").Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/employees.schema").Employee, {}, {}> & import("./schemas/employees.schema").Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto, file: Express.Multer.File): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/employees.schema").Employee, {}, {}> & import("./schemas/employees.schema").Employee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
