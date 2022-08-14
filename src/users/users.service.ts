import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { hashString } from '../shared/helpers';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './model/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(createUserDto: CreateUserDto) {
    try {
      createUserDto.password = await hashString(createUserDto.password);
      return await this.userModel.create({ ...createUserDto });
    } catch (error) {
      const errors = error.errors.map((error: any) => error.message);

      throw new BadRequestException(errors);
    }
  }

  findAll() {
    return this.userModel.findAll();
  }

  async findById(id: number) {
    const user = await this.userModel.findByPk(id);

    if (!user) throw new NotFoundException();

    return user;
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ where: { email }, raw: true });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.password = updateUserDto.password
      ? await hashString(updateUserDto.password)
      : undefined;
    const [count, updatedUser] = await this.userModel.update(
      { ...updateUserDto },
      {
        where: { id },
        returning: true,
      },
    );

    if (count === 0) throw new NotFoundException();

    return updatedUser;
  }

  async remove(id: number) {
    const count = await this.userModel.destroy({ where: { id } });

    if (count === 0) throw new NotFoundException();

    return 'User deleted';
  }
}
