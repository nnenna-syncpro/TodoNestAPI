import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  // InjectRepository provides a method that allows us do CRUD operations
  //create a private repository of type todo
  constructor(
    @InjectRepository(Todo) private TodoRepository: Repository<Todo>,
  ) {}

  //returns a promise that contains an array of todos
  async getAll(): Promise<Todo[]> {
    return await this.TodoRepository.find();
  }

  //takes a parameter of todo of type Todo, returns a promise of a single todo created
  async create(todo: Todo): Promise<Todo> {
    return await this.TodoRepository.create(todo);
  }

  //take an id parameter
  async getById(id: number): Promise<Todo> {
    return await this.TodoRepository.findOne({ where: { id: id } });
  }

  async update(id: number, todo: Todo): Promise<UpdateResult> {
    return await this.TodoRepository.update(id, todo);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.TodoRepository.delete(id);
  }
}
