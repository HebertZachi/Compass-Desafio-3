import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { Serialize } from 'src/Interceptors/serialize.Interceptors';;
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';


@Controller('api/v1/users')
@Serialize(UserDTO)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  // @Post('/signup')
  // createUser(@Body() data: CreateUserDto) {
  //   this.usersService.create(data.name, data.email, data.password);
  // }

  @Post('/signup')
  createUser(@Body() data: CreateUserDto) {
    this.authService.signup(data.name, data.email, data.password);
  }

  @Post('/signin')
  signin(@Body() body: LoginUserDto) {
    return this.authService.signin(body.email, body.password);
  }

  @Get('/')
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    console.log('handler is running')
    return this.usersService.findOne(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.usersService.update(parseInt(id), data);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
}
