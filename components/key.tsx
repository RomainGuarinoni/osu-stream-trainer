import { ChangeEvent, useCallback, useEffect, useState } from "react";

type Props = {
  keyValue: string;
  updateKeyValue: (key: string) => void;
  onPress: () => void;
};

export const Key: React.FC<Props> = ({ keyValue, updateKeyValue, onPress }) => {
  const [isKeyPress, setIsKeyPress] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const handleKeyPress = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key.toLowerCase() !== keyValue) return;

      setIsKeyPress(true);
      onPress();
    },
    [keyValue, onPress]
  );

  const handleKeyUp = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key.toLowerCase() !== keyValue) return;
      setIsKeyPress(false);
    },
    [keyValue]
  );

  const handleKeyUpdate = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value.length > 1) return;
    updateKeyValue(value);
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyPress, handleKeyUp]);

  useEffect(() => {
    console.log(isInputDisabled);
  }, [isInputDisabled]);

  return (
    <div
      className="w-20 h-20 flex flex-col"
      onClick={() => {
        console.log("click");
        setIsInputDisabled(false);
      }}
    >
      <div
        className={`border-2 border-gray-700 text-gray-700 rounded-full flex transition-all ease-in-out duration-75 m-auto ${
          isKeyPress && isInputDisabled ? "h-5/6 w-5/6" : "w-full h-full"
        }`}
      >
        <input
          type="text"
          className="m-auto bg-transparent w-full h-full text-center cursor-pointer"
          value={keyValue.toUpperCase()}
          onBlur={() => {
            console.log("blur");
            setIsInputDisabled(true);
          }}
          onChange={handleKeyUpdate}
        />
      </div>
    </div>
  );
};
