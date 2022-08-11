import { HitTiming } from "./precision";

/**
 *
 * @param {number} timeDifference the time difference between the theoric click and the user click in MS
 * @param {number} OD the Overall Difficulty osu related, between 0 and 10
 */
export const getHitTiming = (
  timeDifference: number,
  OD: number
): typeof HitTiming[number] => {
  // X, Y and Z are in ms
  const X = 78 - 6 * OD;
  const Y = 138 - 8 * OD;
  const Z = 198 - 10 * OD;

  if (timeDifference <= X) return "300";

  if (timeDifference > X && timeDifference <= Y) return "100";

  if (timeDifference > Y && timeDifference <= Z) return "50";

  return "miss";
};
