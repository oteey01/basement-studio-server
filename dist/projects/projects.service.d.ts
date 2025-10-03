import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schemas/projects.schema';
import { Model } from 'mongoose';
export declare class ProjectsService {
    private readonly projectModel;
    constructor(projectModel: Model<Project>);
    create(body: CreateProjectDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, Project, {}, {}> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Project, {}, {}> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    update(id: string, updateProjectDto: UpdateProjectDto, file: Express.Multer.File): Promise<(import("mongoose").Document<unknown, {}, Project, {}, {}> & Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<{
        message: string;
    } | null>;
}
