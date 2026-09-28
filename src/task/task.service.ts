import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '../../types/task.js';

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

    create() {
        const newTask = {
            id: this.tasks.length + 1,
            title: "New Task",
            isCompleted: false
        }
        this.tasks.push(newTask)
        return this.tasks
    } 
}
