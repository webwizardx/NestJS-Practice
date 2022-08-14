import { User } from '../../users/model/user.model';

export interface Request extends Express.Request {
  user: User;
}
