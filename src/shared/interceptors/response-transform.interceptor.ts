import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  message: string;
  date: Date;
  statusCode: number;
  data: T;
}

@Injectable()
export class ResponseTransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const date = new Date();
    const statusCode = context.switchToHttp().getResponse().statusCode;
    const [message] = Object.entries(HttpStatus).find(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]) => value === statusCode,
    );

    return next
      .handle()
      .pipe(map((data) => ({ message, statusCode, date, data })));
  }
}
