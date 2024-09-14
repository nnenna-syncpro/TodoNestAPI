import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('todo')
export class TodoController {
  constructor(private TodoService: TodoService) {}

  //return all todos
  @Get()
  async getAll(): Promise<Todo[]> {
    return await this.TodoService.getAll();
  }

  //get new todo from the body
  @Post()
  async create(@Body() todo: Todo): Promise<Todo> {
    return await this.TodoService.create(todo);
  }

  //get one todo by id parameter
  @Get(':id')
  async getById(@Param() id: number): Promise<Todo> {
    return await this.TodoService.getById(id);
  }

  //update todo by id parameter
  @Put(':id')
  async update(@Param() id: number, @Body() todo: Todo): Promise<UpdateResult> {
    return await this.TodoService.update(id, todo);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<DeleteResult> {
    return await this.TodoService.delete(id);
  }
}
