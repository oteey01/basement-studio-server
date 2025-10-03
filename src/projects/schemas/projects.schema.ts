import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Customer } from 'src/customers/schemas/customers.schema';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop({required:true})
  projectName: string;
  @Prop({required:true})
  status: 'pending' | 'active' | 'terminated';
  @Prop()
  budget: number;
  @Prop()
  image: string;
  @Prop()
  duration: number;
  @Prop()
  filePath: string;
  @Prop()
  fileName: string

}

export const ProjectSchema = SchemaFactory.createForClass(Project);