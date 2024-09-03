const calculate = require("./calculate");

// Write a test for adding 2 numbers and validate the expected results

describe("test for adding 2 numbers", () => {
  it("should return 6", () => {
    expect(calculate.sum(2, 4)).toBe(6);
  });
  it("should return a number", () => {
    expect(calculate.sum(2, "4")).toBe("24");
  });

  // // Write a failing test and see what output you get
  // it("should incorrectly expect sum of 2, 4 as a 10 ", () => {
  //   expect(calculate.sum(2, 4)).toBe(10);
  // });
});

// //////////////////////////////////////////////////////////////
// Write more test cases: for subtract
describe("text for subtracting numbers", () => {
  it("should return 5", () => {
    expect(calculate.subtract(7, 2)).toBe(5);
  });

  // it("should return incorrect number", () => {
  //   expect(calculate.subtract(7, 2)).toBe(4);
  // });

  it("should return NaN when subtracting a number and a non-numeric string", () => {
    expect(calculate.subtract(2, "hi")).toBeNaN();
  });
});

// Write more test cases for multiply
describe("test muptiply numbers", () => {
  it("should return 8", () => {
    expect(calculate.multiply(4, 2)).toBe(8);
  });

  // it("should return incorrect number", () => {
  //   expect(calculate.multiply(7, 2)).toBe(10);
  // });

  it("should return a number when multiply a number and a numeric string", () => {
    expect(calculate.multiply(2, "5")).toBe(10);
  });

  it("should return NaN when multiply a number and a numeric string", () => {
    expect(calculate.multiply(2, "hi")).toBeNaN();
  });
});
