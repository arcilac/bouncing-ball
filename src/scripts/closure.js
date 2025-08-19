function foo() {
  let message = "Hola desde foo";

  return function bar() {
    console.log(message);
  };
}

const myClosure = foo();
myClosure();
