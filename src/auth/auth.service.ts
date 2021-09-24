import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import { JwtService} from '@nestjs/jwt'
import {UsersService} from '../users/users.service'
import { Users } from '../entities/users.entity';
import {LoginUserDTO} from '../users/users.dto'
import {hashPassword, isHashValid} from '../util/cipher'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await Users.findByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(data: LoginUserDTO) {
    const user = await Users.findByEmail(data.email);
    if (!user) throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'not found email',
    }, HttpStatus.NOT_FOUND)

    if (!user.status) throw new HttpException({
      status: HttpStatus.UNAUTHORIZED,
      error: 'invalid user status',
    }, HttpStatus.UNAUTHORIZED)

    const encryptedPassword = await hashPassword(data.password)
    await isHashValid(data.password, encryptedPassword)

    const payload = { email: user.email, sub: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}