import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { compare } from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Role } from './enums/role.enum';
import { getHash } from '../common/utils';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: AuthDto): Promise<User> {
    if (await this.usersService.findByEmail(dto.email)) {
      throw new UnauthorizedException(
        `This email already exists: ${dto.email}`,
      );
    }
    const newUser = {
      ...dto,
      roles: [Role.User],
      password: await getHash(dto.password),
    };
    return this.usersService.create(newUser);
  }

  // todo: exclude password from response
  async login(dto: AuthDto): Promise<any> {
    const user = await this.usersService.findByEmail(dto.email);

    // console.log(user);
    if (user && (await compare(dto.password, user.password))) {
      // return user;
      return {
        //
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        access_token: await this.jwtService.signAsync({ id: user._id }),
      };
    } else {
      console.log('error');
      // throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
      throw new BadRequestException(`Invalid credentials: ${dto.email}`);
    }
  }

  // todo: PartialType(AuthDto) or Pick<AuthDto>
  // async findUser(email: string) {
  //   return;
  // }

  // @UsePipes(new ValidationPipe())
  // async register(req: AuthDto) {
  //   const user = await this.usersService.findOne(req.email);
  //
  //   // if(!this.usersService.checkEmail(email)) {
  //   //     return;
  //   // }
  //
  //   this.usersService.create({ email, password }); // Roles.User
  // }

  // login() {}
  //
  // logout() {}

  // async validateUser(email: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(email);
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }
}
