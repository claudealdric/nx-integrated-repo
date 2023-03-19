import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { isOdd } from '@nx-integrated/is-odd';

@Injectable()
export class AppService {
  isOdd(input: string) {
    const parsedNumber = Number(input);

    if (Number.isNaN(parsedNumber)) {
      throw new HttpException(
        `${input} is not a valid number`,
        HttpStatus.BAD_REQUEST
      );
    }

    return `${parsedNumber} is ${isOdd(parsedNumber) ? '' : 'not'} odd.`;
  }

  sayHello(): string {
    const greeting = this.convertFirstLetterToUppercase(process.env.GREETING);
    const name = process.env.NAME;
    return `${greeting}, ${name}.`;
  }

  private convertFirstLetterToUppercase(s: string): string {
    return s.charAt(0).toUpperCase().concat(s.substring(1));
  }
}
