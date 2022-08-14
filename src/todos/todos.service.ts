import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/model/user.model';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './model/todo.model';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo) private todoModel: typeof Todo) {}

  create(user: User, createTodoDto: CreateTodoDto) {
    return this.todoModel.create({ ...createTodoDto, userId: user.id });
  }

  async findAll(user: User) {
    return await user.$get('todos');
  }

  async findOne(user: User, id: number) {
    const todo = await this.todoModel.findOne({
      where: { id, userId: user.id },
    });

    if (!todo) throw new NotFoundException();

    return todo;
  }

  async update(user: User, id: number, updateTodoDto: UpdateTodoDto) {
    const [count, updatedTodo] = await this.todoModel.update(updateTodoDto, {
      where: { id, userId: user.id },
      returning: true,
    });

    if (count === 0) throw new NotFoundException();

    return updatedTodo;
  }

  async remove(user: User, id: number) {
    const count = await this.todoModel.destroy({
      where: { id, userId: user.id },
    });

    if (count === 0) throw new NotFoundException();

    return 'Todo deleted';
  }
}
