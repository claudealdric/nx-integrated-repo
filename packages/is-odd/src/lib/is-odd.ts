import { isEven } from "@nx-integrated/is-even";

export function isOdd(n: number): boolean {
	return !isEven(n);
}
