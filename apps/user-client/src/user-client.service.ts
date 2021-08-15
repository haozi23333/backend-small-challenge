import { Injectable } from '@nestjs/common';

@Injectable()
export class UserClientService {
  getHello(): string {
    return 'Hello World!';
  }
}
