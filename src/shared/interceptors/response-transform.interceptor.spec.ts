import { ExecutionContext, CallHandler } from '@nestjs/common';
import { of } from 'rxjs';
import { ResponseTransformInterceptor } from './response-transform.interceptor';

describe('ResponseTransformInterceptor', () => {
  it('should add metada to the response', (done) => {
    const interceptor = new ResponseTransformInterceptor();

    const context = {
      switchToHttp() {
        return {
          getResponse() {
            return {
              statusCode: 200,
            };
          },
        };
      },
    } as ExecutionContext;
    const next = {
      handle() {
        return of('Test data');
      },
    } as CallHandler;

    interceptor.intercept(context, next).subscribe((data) => {
      try {
        expect(data.message).toBe('OK');
        expect(data.statusCode).toBe(200);
        expect(data.date).toBeInstanceOf(Date);
        expect(data.data).toBe('Test data');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
