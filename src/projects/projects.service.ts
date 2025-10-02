import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schemas/projects.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Project.name) private readonly projectModel: Model<Project>) {}
  
  async create(body: CreateProjectDto, file:Express.Multer.File,) {
    console.log(file)
    return this.projectModel.create({
      ...body,
      fileName: file ? file.filename : null,
      filePath: file ? `/uploads/${file.filename}` : null,
    })
  }

  async findAll() {
    return this.projectModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} project`;
  // }

  async update(id: string, updateProjectDto: UpdateProjectDto, file: Express.Multer.File) {
      let projectData = {...updateProjectDto}

      if (file) {
        projectData = {...projectData, fileName: file.filename ,
      filePath: `/uploads/${file.filename}` }
      }
      const updatedProject = await this.projectModel.findByIdAndUpdate(id, projectData)
      return updatedProject
    }
  
    async remove(id: string): Promise<{message:string} | null> {
      const fileDoc = await this.projectModel.findById(id);
    if (!fileDoc) throw new NotFoundException('File not found');

    // Remove from local storage
    if (fileDoc.fileName){
    const filePath = join(process.cwd(), 'uploads', fileDoc.fileName);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting file from disk:', err);
      }
    });}

    // Remove from MongoDB
    await this.projectModel.findByIdAndDelete(id);

    return { message: 'File deleted successfully' };
      
    }
}
