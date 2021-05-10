const triangle = require("../src/triangle");
describe("triangle function", () => {
test("describe(link)", () => {
    const input = [
      { id: 1, url:  },
      { id: 2, url:  },
      { id: 3, url:  },
    ];
 const output = [{ id: 3, url:  }];

    expect(triangle(input, link)).toEqual(output);

    expect(triangle(input, LINK)).toEqual(output);
  });
});
