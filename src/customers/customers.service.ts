import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './schemas/customers.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CustomersService {
  constructor(@InjectModel(Customer.name) private readonly customerModel: Model<Customer>){}
   async create(CreateCustomerDto: any): Promise<Customer> {
        const createdUser = new this.customerModel(CreateCustomerDto);
        return createdUser.save();
      }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async remove(id: string): Promise<Customer | null> {
    return this.customerModel.findByIdAndDelete(id)
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} customer`;
  // }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const updatedCustomer = await this.customerModel.findByIdAndUpdate(id, updateCustomerDto)
    return `This action updates a #${id} customer`;
  }

  
}
