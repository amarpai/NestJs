import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.staus.enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
