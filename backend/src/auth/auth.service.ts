import { Injectable, BadRequestException } from '@nestjs/common';
import { isStellarAccountAddress } from '../common/utils/stellar-address';

@Injectable()
export class AuthService {
  validateStellarAddress(address: string): boolean {
    return isStellarAccountAddress(address);
  }

  async createSession(stellarAddress: string) {
    if (!isStellarAccountAddress(stellarAddress)) {
      throw new BadRequestException('Invalid Stellar address');
    }
    return {
      userId: stellarAddress,
      token: Buffer.from(stellarAddress).toString('base64'),
    };
  }
}
