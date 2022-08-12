export const getTimeDiffBetweenPressInMs = (bpm: number) =>
  (60 / bpm / 4) * 1000;
