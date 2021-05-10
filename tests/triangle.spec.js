const isTriangle = require("../src/triangle");
describe("isTriangle function", () => {
  test(" check if values are valid integers", () => {
    expect(isTriangle(0,0,0)).toBeFalsy();
    expect(isTriangle()).toBeFalsy();
    expect(isTriangle(null,null,3)).toBeFalsy();
    expect(isTriangle(null)).toBeFalsy();
    expect(isTriangle(-10,-20,-30)).toBeFalsy();
    });
  test("should correctly create a triangle object with three lengths", () => {
  expect(isTriangle(1,2,2)).toBeTruthy();
  });

  test("case 2", () => {
    expect(isTriangle(7,2,2)).toBeFalsy();
    });
});
