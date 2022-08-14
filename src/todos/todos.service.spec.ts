import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../users/model/user.model';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './model/todo.model';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;
  let userModel: User;
  const todo: CreateTodoDto = {
    title: 'Test Title',
    description: 'Test Description',
  };
  const todoModelSpy = {
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  };
  const userModelSpy = {
    id: 1,
    $get: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodosService,
        {
          provide: getModelToken(Todo),
          useValue: todoModelSpy,
        },
        {
          provide: getModelToken(User),
          useValue: userModelSpy,
        },
      ],
    }).compile();

    service = module.get<TodosService>(TodosService);
    userModel = module.get<User>(getModelToken(User));
  });

  it('should get an array of todos', async () => {
    await service.findAll(userModel);

    expect(userModel.$get).toBeCalledWith('todos');
  });

  it('should get a todo', async () => {
    todoModelSpy.findOne.mockReturnValue(todo);
    const id = 1;

    await service.findOne(userModel, id);

    expect(todoModelSpy.findOne).toBeCalledWith({
      where: { id, userId: userModel.id },
    });
  });

  it('should create a todo', async () => {
    await service.create(userModel, todo);

    expect(todoModelSpy.create).toBeCalledWith({
      ...todo,
      userId: userModel.id,
    });
  });

  it('should update a todo', async () => {
    const id = 1;
    todoModelSpy.update.mockReturnValue([id, todo]);

    await service.update(userModel, id, todo);

    expect(todoModelSpy.update).toBeCalledWith(todo, {
      where: { id, userId: userModel.id },
      returning: true,
    });
  });

  it('should delete a todo', async () => {
    const id = 1;

    await service.remove(userModel, id);

    expect(todoModelSpy.destroy).toBeCalledWith({
      where: { id, userId: userModel.id },
    });
  });
});
