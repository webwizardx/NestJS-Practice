import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Todo } from '../../todos/model/todo.model';

@Table({
  paranoid: true,
  underscored: true,
})
export class User extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @Column({ type: DataType.STRING })
  password: string;

  @HasMany(() => Todo)
  todos: Todo[];
}
