import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'src/shared/interfaces';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

describe('TodosController', () => {
  let controller: TodosController;
  const todo: CreateTodoDto = {
    title: 'Test Title',
    description: 'Test Description',
  };
  const todoServiceSpy = {
    findAll: jest.fn(() => [todo]),
    findOne: jest.fn(() => todo),
    create: jest.fn(() => todo),
    update: jest.fn(() => todo),
    remove: jest.fn(() => 'Todo deleted'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [{ provide: TodosService, useValue: todoServiceSpy }],
    }).compile();

    controller = module.get<TodosController>(TodosController);
  });

  it('should get an array of todos', async () => {
    const request = {} as Request;

    expect(await controller.findAll(request)).toEqual([todo]);
  });

  it('should get a todo', async () => {
    const request = {} as Request;

    expect(await controller.findOne(request, 1)).toEqual(todo);
  });

  it('should create a todo', async () => {
    const request = {} as Request;

    expect(await controller.create(request, todo)).toEqual(todo);
  });

  it('should update a todo', async () => {
    const request = {} as Request;

    expect(await controller.update(request, 1, todo)).toEqual(todo);
  });

  it('should delete a todo', async () => {
    const request = {} as Request;

    expect(await controller.remove(request, 1)).toBe('Todo deleted');
  });
});
