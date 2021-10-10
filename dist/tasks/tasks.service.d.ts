import { TaskStatus } from './tasks.staus.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.to';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';
export declare class TasksService {
    private tasksRepositort;
    constructor(tasksRepositort: TasksRepository);
    getTaskbyId(id: string): Promise<Task>;
    deleteTaskById(id: string): Promise<void>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTaskStatus(id: string, status: TaskStatus): Promise<Task>;
    getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
}
