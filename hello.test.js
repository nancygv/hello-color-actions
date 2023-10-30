const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from the Mexico City!🇲🇽... TesT Actividad 4.2");
  });
});
