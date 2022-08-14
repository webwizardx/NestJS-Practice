import { applyDecorators } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiBody,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function LoginSwagger() {
  return applyDecorators(
    ApiBody({
      schema: {
        title: 'Login Body',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
        },
      },
    }),
    ApiCreatedResponse({
      description: 'Successfully logged in',
      schema: {
        title: 'LoginResponse',
        properties: {
          accessToken: {
            type: 'string',
          },
        },
      },
    }),
    ApiUnauthorizedResponse({
      description: 'Bad credentials',
    }),
  );
}
