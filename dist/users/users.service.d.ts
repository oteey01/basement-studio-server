import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(email: string, password: string, fullName: string): Promise<User>;
    findByEmail(email: string): Promise<UserDocument | undefined>;
}
