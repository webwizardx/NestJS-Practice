import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';

describe('JwtAuthGuard', () => {
  it('should allow access to the route', () => {
    const reflector = new Reflector();
    const getAllAndOverrideSpy = jest.spyOn(reflector, 'getAllAndOverride');
    getAllAndOverrideSpy.mockReturnValue(true);
    const jwtAuthGuard = new JwtAuthGuard(reflector);
    const context = {
      getHandler() {
        return;
      },
      getClass() {
        return;
      },
    } as ExecutionContext;

    expect(jwtAuthGuard.canActivate(context)).toBe(true);
  });
});
