import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {

  @Prop({required:true})
  employeeName: string;

  @Prop()
  email: string;

  @Prop()
  designation: string;
  
  @Prop()
  country: string;

  @Prop()
  hireDate: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' })
  // reportsTo: Employee;

  @Prop()
  location: string;

  @Prop()
  filePath: string;

  @Prop()
  fileName: string


}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);