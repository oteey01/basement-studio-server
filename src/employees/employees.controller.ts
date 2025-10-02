import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, callback) => {
            if (!file) return
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            callback(null, uniqueSuffix + extname(file.originalname));
          },
        }),
      }),
    )
  create(@Body() createEmployeeDto: CreateEmployeeDto,  @UploadedFile() file: Express.Multer.File) { 
    return this.employeesService.create(createEmployeeDto, file);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id)
    return this.employeesService.findById(id);
  }
  
  @Get()
  findAll() {
    return this.employeesService.findAll();
  }


  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          if (!file) return;
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto,  @UploadedFile() file: Express.Multer.File) {
    console.log(file)
    return this.employeesService.update(id, updateEmployeeDto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}
