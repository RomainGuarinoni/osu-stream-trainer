import type { NextPage } from "next";
import { useState } from "react";
import { Key } from "../components/key";

const DEFAULT_LEFT_KEY_VALUE = "w";
const DEFAULT_RIGHT_KEY_VALUE = "x";

const Home: NextPage = () => {
  const [leftKey, setLeftKey] = useState(DEFAULT_LEFT_KEY_VALUE);
  const [rightKey, setRightKey] = useState(DEFAULT_RIGHT_KEY_VALUE);

  const [lastPressKeyDate, setLastPressKeyDate] = useState<Date>();

  const handleKeyPress = () => {
    setLastPressKeyDate(new Date());
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

      <p>{lastPressKeyDate?.toISOString()} </p>
    </div>
  );
};

export default Home;
