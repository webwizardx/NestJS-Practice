import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/model/user.model';

@Table({
  paranoid: true,
  underscored: true,
})
export class Todo extends Model {
  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING, allowNull: true })
  description?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isDone: boolean;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
