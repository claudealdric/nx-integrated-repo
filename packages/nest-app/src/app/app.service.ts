import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHello(): string {
    const greeting = this.convertFirstLetterToUppercase(process.env.GREETING);
    const name = process.env.NAME;
    return `${greeting}, ${name}.`;
  }

  private convertFirstLetterToUppercase(s: string): string {
    return s.charAt(0).toUpperCase().concat(s.substring(1));
  }
}
