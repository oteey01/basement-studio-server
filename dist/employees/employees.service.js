"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importStar(require("mongoose"));
const employees_schema_1 = require("./schemas/employees.schema");
const path_1 = require("path");
const fs = __importStar(require("fs"));
let EmployeesService = class EmployeesService {
    employeeModel;
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }
    async create(body, file) {
        return this.employeeModel.create({
            ...body,
            fileName: file ? file.filename : null,
            filePath: file ? `/uploads/${file.filename}` : null,
        });
    }
    async findAll() {
        return this.employeeModel.find().exec();
    }
    async findById(id) {
        return this.employeeModel.findById(new mongoose_2.Types.ObjectId(id));
    }
    async update(id, updateEmployeeDto, file) {
        const _id = new mongoose_2.default.Types.ObjectId(id);
        let employeeData = { ...updateEmployeeDto };
        if (file) {
            employeeData = { ...employeeData, fileName: file.filename,
                filePath: `/uploads/${file.filename}` };
        }
        const updatedEmployee = await this.employeeModel.findByIdAndUpdate(_id, employeeData).exec();
        return updatedEmployee;
    }
    async remove(id) {
        const fileDoc = await this.employeeModel.findById(id);
        if (!fileDoc)
            throw new common_1.NotFoundException('File not found');
        if (fileDoc.fileName) {
            const filePath = (0, path_1.join)(process.cwd(), 'uploads', fileDoc.fileName);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error deleting file from disk:', err);
                }
            });
        }
        await this.employeeModel.findByIdAndDelete(id);
        return { message: 'File deleted successfully' };
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(employees_schema_1.Employee.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmployeesService);
//# sourceMappingURL=employees.service.js.map