import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import { ConfigService } from "@nestjs/config";
import { isOdd } from "@nx-integrated/is-odd";

@Injectable()
export class AppService {
	constructor(private readonly configService: ConfigService) {}

	isOdd(input: string) {
		const parsedNumber = Number(input);

		if (Number.isNaN(parsedNumber)) {
			throw new HttpException(
				`${input} is not a valid number`,
				HttpStatus.BAD_REQUEST
			);
		}

		return `${parsedNumber} is ${isOdd(parsedNumber) ? "" : "not"} odd.`;
	}

	sayHello(): string {
		const greeting = this.convertFirstLetterToUppercase(
			this.configService.get<string>("GREETING")
		);
		const name = this.configService.get<string>("NAME");
		return `${greeting}, ${name}.`;
	}

	private convertFirstLetterToUppercase(s: string): string {
		return s.charAt(0).toUpperCase().concat(s.substring(1));
	}
}
