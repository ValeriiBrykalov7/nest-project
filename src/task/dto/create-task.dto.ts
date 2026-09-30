import { IsString, IsNotEmpty, MinLength, MaxLength, IsOptional,  IsPositive, IsInt, IsArray, IsEnum, Matches, IsUrl, IsUUID } from "class-validator";
import { StartWith } from "../decorators/start-with.decorator.js";

export enum TaskTag {
    WORK = 'work',
    PERSONAL = 'personal',
    URGENT = 'urgent',
    LOW_PRIORITY = 'low-priority'
}

export class CreateTaskDto {
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    @StartWith('Task:', { message: 'Title must start with "Task:"' })
    @MinLength(3, { message: 'Title must be at least 3 characters long' })
    @MaxLength(100, { message: 'Title must be at most 100 characters long' })
    title: string;

    @IsString({ message: 'Description must be a string' })
    @IsOptional()
    description?: string;

    @IsOptional()
    @IsPositive({ message: 'Priority must be a positive number' })
    @IsInt( { message: 'Priority must be a number' })
    priority?: number;

    @IsArray({ message: 'Tags must be an array'})
    @IsEnum(TaskTag, { each: true, message: 'Each tag must be a valid task tag' })
    @IsOptional()
    tags: string[];

    
    
    
}