import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("./schemas/projects.schema").Project, {}, {}> & import("./schemas/projects.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/projects.schema").Project, {}, {}> & import("./schemas/projects.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    update(id: string, updateProjectDto: UpdateProjectDto, file: Express.Multer.File): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/projects.schema").Project, {}, {}> & import("./schemas/projects.schema").Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<{
        message: string;
    } | null>;
}
