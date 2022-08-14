import { JwtService } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../users/model/user.model';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const jwtToken = 'accessToken';
  const jwtServiceSpy = {
    sign: jest.fn(() => jwtToken),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: jwtServiceSpy },
        UsersService,
        {
          provide: getModelToken(User),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should create a jwt', () => {
    const user = { id: 1, email: 'john@doe.com' } as User;

    const response = service.login(user);

    expect(response.accessToken).toBe(jwtToken);
  });
});
