import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { WalletAddressDto } from './wallet-address.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: WalletAddressDto) {
    return this.authService.createSession(body.address);
  }
}
