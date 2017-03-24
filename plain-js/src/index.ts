import { add, subtract, logger } from "./util/utils";
import { leftpad } from "./util/leftpad";
import { readFile } from "fs";

export class Hello {
  constructor() { }

  parseFile(fileName: string) {
    readFile(fileName, (err, data) => {
      console.log(data.toString());
    });
  }

  testCall(msg: string) {
    let formatted = leftpad(msg, 15);
    let greeting = leftpad("hello", 15)
    console.log(formatted);
  }
}

const hello = new Hello();

hello.parseFile("tsconfig.json");
hello.testCall("Hello World");
