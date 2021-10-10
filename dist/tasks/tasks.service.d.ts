import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.to';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskbyId(id: string): Task;
    deleteTaskById(id: string): void;
    createTask(createTaskDto: CreateTaskDto): Task;
    updateTaskStatus(id: string, status: TaskStatus): Task;
    getTasksWithFilter(filterDto: GetTasksFilterDto): Task[];
}
