import type { NextPage } from "next";
import { useMemo, useState } from "react";
import { Key } from "../components/key";
import { getAccuracy } from "../lib/getAccuracy";
import { getHitTiming } from "../lib/getHitTiming";
import { getTimeDiffBetweenPressInMs } from "../lib/getTimeDiffBetweenPressInMs";

const DEFAULT_LEFT_KEY_VALUE = "w";
const DEFAULT_RIGHT_KEY_VALUE = "x";

const Home: NextPage = () => {
  const [leftKey, setLeftKey] = useState(DEFAULT_LEFT_KEY_VALUE);
  const [rightKey, setRightKey] = useState(DEFAULT_RIGHT_KEY_VALUE);

  // OSU states
  const [OD, setOD] = useState(5);
  const [bpm, setBpm] = useState(180);
  const [nb300, setNb300] = useState(0);
  const [nb100, setNb100] = useState(0);
  const [nb50, setNb50] = useState(0);
  const [nbMiss, setNbMiss] = useState(0);
  const accuracy = useMemo(
    () => getAccuracy(nb300, nb100, nb50, nbMiss),
    [nb300, nb100, nb50, nbMiss]
  );

  const timeBetweenPress = useMemo(
    () => getTimeDiffBetweenPressInMs(bpm),
    [bpm]
  );

  const [startTime, setStartTime] = useState<number | null>(null);
  const [pressIndex, setPressIndex] = useState(0);

  const handleKeyPress = () => {
    const currentTime = new Date().getTime();

    if (!startTime) {
      setStartTime(currentTime);
      return;
    }

    const hitTiming = getHitTiming({
      OD,
      currentTime,
      startTime,
      timeBetweenPress,
      pressIndex: pressIndex + 1,
    });

    switch (hitTiming) {
      case "300":
        setNb300(nb300 + 1);

        break;

      case "100":
        setNb100(nb100 + 1);
        break;

      case "50":
        setNb50(nb50 + 1);
        break;

      case "miss":
        setNbMiss(nbMiss + 1);
        break;
    }
    setPressIndex(pressIndex + 1);
    console.log(nb300, nb100, nb50, nbMiss);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center gap-5 bg-gray-200">
      <Key
        keyValue={leftKey}
        updateKeyValue={setLeftKey}
        onPress={handleKeyPress}
      />

      <Key
        keyValue={rightKey}
        updateKeyValue={setRightKey}
        onPress={handleKeyPress}
      />

      <p>{accuracy} </p>
    </div>
  );
};

export default Home;
