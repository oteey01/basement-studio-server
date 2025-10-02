import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.module';
import { ProjectsModule } from './projects/projects.module';
import { CustomersModule } from './customers/customers.module';
// import { ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes ConfigService available everywhere
    }),
    EmployeesModule, 
    ProjectsModule, 
    CustomersModule, 
    UsersModule, 
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI??''),
    // MongooseModule.forRoot('mongodb://127.0.0.1:5172/test'),
    
    ],
  
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
