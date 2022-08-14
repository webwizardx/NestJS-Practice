import { Test, TestingModule } from '@nestjs/testing';
import { Request } from '../shared/interfaces';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  const authServiceSpy = {
    login: jest.fn(() => ({ accessToken: 'accessToken' })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should login an retrieved a token', async () => {
    const request = {} as Request;
    expect(await controller.login(request)).toEqual({
      accessToken: 'accessToken',
    });
  });
});
