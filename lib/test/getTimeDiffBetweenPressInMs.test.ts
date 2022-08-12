import { getTimeDiffBetweenPressInMs } from "../getTimeDiffBetweenPressInMs";

describe("getTimeDiffBetweenPressInMs", () => {
  describe("60 bpm", () => {
    it("should return 250", () => {
      // given
      const bpm = 60;

      // when
      const result = getTimeDiffBetweenPressInMs(bpm);

      // then
      expect(result).toBe(250);
    });
  });

  describe("120 bpm", () => {
    it("should return 125", () => {
      // given
      const bpm = 120;

      // when
      const result = getTimeDiffBetweenPressInMs(bpm);

      // then
      expect(result).toBe(125);
    });
  });

  describe("300 bpm", () => {
    it("should return 50", () => {
      // given
      const bpm = 300;

      // when
      const result = getTimeDiffBetweenPressInMs(bpm);

      // then
      expect(result).toBe(50);
    });
  });
});
