import mongoose, { HydratedDocument } from 'mongoose';
export type ProjectDocument = HydratedDocument<Project>;
export declare class Project {
    projectName: string;
    status: 'pending' | 'active' | 'terminated';
    budget: number;
    image: string;
    duration: number;
    filePath: string;
    fileName: string;
}
export declare const ProjectSchema: mongoose.Schema<Project, mongoose.Model<Project, any, any, any, mongoose.Document<unknown, any, Project, any, {}> & Project & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Project, mongoose.Document<unknown, {}, mongoose.FlatRecord<Project>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<Project> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
