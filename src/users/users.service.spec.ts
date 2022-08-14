import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './model/user.model';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let model: typeof User;
  const user: CreateUserDto = { email: 'john@doe.com', password: '12346' };
  const userModelSpy = {
    findAll: jest.fn(() => [user]),
    findOne: jest.fn(),
    findByPk: jest.fn(() => user),
    create: jest.fn(() => user),
    update: jest.fn(() => [1, user]),
    destroy: jest.fn(() => 1),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User),
          useValue: userModelSpy,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get<typeof User>(getModelToken(User));
  });

  it('should get an array of users', async () => {
    await service.findAll();

    expect(userModelSpy.findAll).toBeCalled();
  });

  it('should get an user by id', async () => {
    const id = 1;

    await service.findById(id);

    expect(userModelSpy.findByPk).toBeCalledWith(id);
  });

  it('should get an user by email', async () => {
    const email = 'john@doe.com';

    await service.findByEmail(email);

    expect(userModelSpy.findOne).toBeCalledWith({
      where: { email },
      raw: true,
    });
  });

  it('should create an user', async () => {
    await service.create(user);

    expect(userModelSpy.create).toBeCalledWith(user);
  });

  it('should update an user', async () => {
    const id = 1;

    await service.update(id, user);

    expect(userModelSpy.update).toBeCalledWith(user, {
      where: { id },
      returning: true,
    });
  });

  it('should delete an user', async () => {
    const id = 1;

    await service.remove(id);

    expect(userModelSpy.destroy).toBeCalledWith({ where: { id } });
  });
});
