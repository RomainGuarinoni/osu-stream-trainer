import { HitTiming } from "./precision";

type Params = {
  startTime: number;
  timeBetweenPress: number;
  currentTime: number;
  OD: number;
  pressIndex: number;
};

export const getHitTiming = ({
  startTime,
  timeBetweenPress,
  currentTime,
  OD,
  pressIndex,
}: Params): typeof HitTiming[number] => {
  // X, Y and Z are in ms
  const X = 78 - 6 * OD;
  const Y = 138 - 8 * OD;
  const Z = 198 - 10 * OD;

  const pressIndexTiming = startTime + pressIndex * timeBetweenPress;

  const timeDifference = Math.abs(currentTime - pressIndexTiming);

  if (timeDifference <= X) return "300";

  if (timeDifference > X && timeDifference <= Y) return "100";

  if (timeDifference > Y && timeDifference <= Z) return "50";

  return "miss";
};
