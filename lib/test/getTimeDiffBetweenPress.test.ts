import { getTimeDiffBetweenPress } from "../getTimeDiffBetweenPress";

describe("getTimeDiffBetweenPress", () => {
  describe("60 bpm", () => {
    it("should return 1", () => {
      // given
      const bpm = 60;

      // when
      const result = getTimeDiffBetweenPress(bpm);

      // then
      expect(result).toBe(1);
    });
  });

  describe("120 bpm", () => {
    it("should return 2", () => {
      // given
      const bpm = 120;

      // when
      const result = getTimeDiffBetweenPress(bpm);

      // then
      expect(result).toBe(2);
    });
  });
});
