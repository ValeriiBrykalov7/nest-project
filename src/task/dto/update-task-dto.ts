import { IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateTaskDto {
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    @MinLength(3, { message: 'Title must be at least 3 characters long' })
    @MaxLength(100, { message: 'Title must be at most 100 characters long' })
    title: string;
    
    @IsBoolean({ message: 'isCompleted must be a boolean' })
    isCompleted: boolean;
}