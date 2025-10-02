import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop({required:true})
  customerName: string;
  @Prop({required:true})
  email: string;
  @Prop()
  location: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);