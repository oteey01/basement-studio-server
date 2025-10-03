import mongoose, { HydratedDocument } from 'mongoose';
export type EmployeeDocument = HydratedDocument<Employee>;
export declare class Employee {
    employeeName: string;
    email: string;
    designation: string;
    country: string;
    hireDate: string;
    location: string;
    filePath: string;
    fileName: string;
}
export declare const EmployeeSchema: mongoose.Schema<Employee, mongoose.Model<Employee, any, any, any, mongoose.Document<unknown, any, Employee, any, {}> & Employee & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Employee, mongoose.Document<unknown, {}, mongoose.FlatRecord<Employee>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<Employee> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
