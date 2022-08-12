import { getAccuracy } from "../getAccuracy";

describe("getAccuracy", () => {
  it("should return 100.00%", () => {
    const result = getAccuracy(1, 0, 0, 0);

    expect(result).toBe("100.00%");
  });

  it("should return 33.33%", () => {
    const result = getAccuracy(0, 1, 0, 0);

    expect(result).toBe("33.33%");
  });

  it("should return 16.67%", () => {
    const result = getAccuracy(0, 0, 1, 0);

    expect(result).toBe("16.67%");
  });

  it("should return 00.00%", () => {
    const result = getAccuracy(0, 0, 0, 1);

    expect(result).toBe("0.00%");
  });
});
