export const getAccuracy = (
  nb300: number,
  nb100: number,
  nb50: number,
  nbMiss: number
) => {
  const accuracy =
    ((300 * nb300 + 100 * nb100 + 50 * nb50) /
      (300 * (nb300 + nb100 + nb50 + nbMiss))) *
    100;

  return accuracy.toFixed(2).concat("%");
};
