import yan2, { B, yan } from './test';

console.log([1].includes(1));
console.log(yan);
console.log(yan2);

const a = 1 + 1;
const b = a;
console.log(a);
console.log(b);
console.log(B);

export function greeter(person: string): string {
  return 'Hello, ' + person;
}

export const name = 'base';
