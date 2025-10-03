import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './schemas/customers.schema';
import { Model } from 'mongoose';
export declare class CustomersService {
    private readonly customerModel;
    constructor(customerModel: Model<Customer>);
    create(CreateCustomerDto: any): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    remove(id: string): Promise<Customer | null>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<string>;
}
