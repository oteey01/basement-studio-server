import { HydratedDocument } from 'mongoose';
export type CustomerDocument = HydratedDocument<Customer>;
export declare class Customer {
    customerName: string;
    email: string;
    location: string;
}
export declare const CustomerSchema: import("mongoose").Schema<Customer, import("mongoose").Model<Customer, any, any, any, import("mongoose").Document<unknown, any, Customer, any, {}> & Customer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Customer, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Customer>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Customer> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
