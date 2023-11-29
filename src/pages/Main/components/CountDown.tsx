import { useEffect, useState } from "react";

type CountDownProps = {
  handleNextStep: () => void;
}

const CountDown = ({ handleNextStep }: CountDownProps) => {

  const [numToDisplay, setNumToDisplay] = useState<number>(3)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (numToDisplay > 0) {
        setNumToDisplay(numToDisplay - 1)
      }

      if (numToDisplay === 0) {
        handleNextStep()
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [handleNextStep, numToDisplay]);

  return (
    <div className="center-container">
      {numToDisplay > 0 ? (
        <h1>{numToDisplay}</h1>
      ) : (
        <h1>Go!</h1>
      )}
    </div>
  )
};

export default CountDown;
