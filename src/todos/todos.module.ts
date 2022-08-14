import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Todo } from './model/todo.model';
import { User } from '../users/model/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Todo, User])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
