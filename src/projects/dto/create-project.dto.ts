export class CreateProjectDto {
      readonly projectName: string;
      readonly status: 'pending' | 'active' | 'terminated';
      readonly budget: number;  
      readonly duration: number;
      readonly fileName: string;
      readonly filePath: string;
}
