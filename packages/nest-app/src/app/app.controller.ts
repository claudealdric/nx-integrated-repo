import { Controller, Get, Param } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	sayHello() {
		return this.appService.sayHello();
	}

	@Get(":number")
	isOdd(@Param("number") number: string) {
		return this.appService.isOdd(number);
	}
}
