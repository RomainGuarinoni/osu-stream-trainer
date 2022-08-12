import { getHitTiming } from "../getHitTiming";
import { getTimeDiffBetweenPressInMs } from "../getTimeDiffBetweenPressInMs";

describe("getHitTiming", () => {
  const bpm = 120;
  const startTime = new Date().getTime();
  const timeBetweenPress = getTimeDiffBetweenPressInMs(bpm);
  const pressIndex = 2;

  describe("OD set to 0", () => {
    const OD = 0;

    it("should return 300", () => {
      const timeDifference = 78;

      const result = getHitTiming({
        OD,
        startTime,
        timeBetweenPress,
        currentTime:
          startTime + (pressIndex * timeBetweenPress + timeDifference),
        pressIndex,
      });

      expect(result).toBe("300");
    });

    it("should return 100", () => {
      const timeDifference = 138;

      const result = getHitTiming({
        OD,
        startTime,
        timeBetweenPress,
        currentTime:
          startTime + (pressIndex * timeBetweenPress + timeDifference),
        pressIndex,
      });

      expect(result).toBe("100");
    });

    it("should return 50", () => {
      const timeDifference = 198;

      const result = getHitTiming({
        OD,
        startTime,
        timeBetweenPress,
        currentTime:
          startTime + (pressIndex * timeBetweenPress + timeDifference),
        pressIndex,
      });

      expect(result).toBe("50");
    });

    it("should return miss", () => {
      const timeDifference = 200;

      const result = getHitTiming({
        OD,
        startTime,
        timeBetweenPress,
        currentTime:
          startTime + (pressIndex * timeBetweenPress + timeDifference),
        pressIndex,
      });

      expect(result).toBe("miss");
    });
  });

  describe("OD set to 5", () => {
    const OD = 5;

    it("should return 300", () => {
      const timeDifference = 48;

      const result = getHitTiming({
        OD,
        startTime,
        timeBetweenPress,
        currentTime:
          startTime + (pressIndex * timeBetweenPress + timeDifference),
        pressIndex,
      });

      expect(result).toBe("300");
    });

    it("should return 100", () => {
      const timeDifference = 98;

      const result = getHitTiming({
        OD,
        startTime,
        timeBetweenPress,
        currentTime:
          startTime + (pressIndex * timeBetweenPress + timeDifference),
        pressIndex,
      });

      expect(result).toBe("100");
    });

    it("should return 50", () => {
      const timeDifference = 148;

      const result = getHitTiming({
        OD,
        startTime,
        timeBetweenPress,
        currentTime:
          startTime + (pressIndex * timeBetweenPress + timeDifference),
        pressIndex,
      });

      expect(result).toBe("50");
    });

    it("should return miss", () => {
      const timeDifference = 200;

      const result = getHitTiming({
        OD,
        startTime,
        timeBetweenPress,
        currentTime:
          startTime + (pressIndex * timeBetweenPress + timeDifference),
        pressIndex,
      });

      expect(result).toBe("miss");
    });
  });
});
