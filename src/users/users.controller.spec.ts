import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  const user: CreateUserDto = { email: 'john@doe.com', password: '123456' };
  const userServiceSpy = {
    findAll: jest.fn(() => [user]),
    findById: jest.fn(() => user),
    create: jest.fn(() => user),
    update: jest.fn(() => user),
    remove: jest.fn(() => 'User deleted'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: userServiceSpy,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should return an array of users', async () => {
    expect(await controller.findAll()).toEqual([user]);
  });

  it('should return an user by id', async () => {
    expect(await controller.findOne(1)).toEqual(user);
  });

  it('should create an user', async () => {
    expect(await controller.create(user)).toEqual(user);
  });

  it('should update an user', async () => {
    expect(await controller.update(1, user)).toEqual(user);
  });

  it('should delete an user', async () => {
    expect(await controller.remove(1)).toBe('User deleted');
  });
});
