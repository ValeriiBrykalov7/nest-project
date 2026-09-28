import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task-dto.js';

@Injectable()
export class TaskService {
    private tasks = [
            {
            id:1,
            title: 'Learn NestJS',
            isCompleted: false,
          },
      {
        id:2,
        title: 'Build a REST API',
        isCompleted: true,
      }
    ];
    findAll() {
        return this.tasks;
    }

    findById(id: number) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new NotFoundException('Task not found')
        }
        return task
    }

    create(dto: CreateTaskDto) {
        const newTask = {
            id: this.tasks.length + 1,
            title: dto.title,
            isCompleted: false
        }
        this.tasks.push(newTask)
        return this.tasks
    }

    updateTask(id:number,dto: UpdateTaskDto) {
        const updatedTask = this.findById(id);
        updatedTask.title = dto.title;
        updatedTask.isCompleted = dto.isCompleted;

        return updatedTask
    }
}
