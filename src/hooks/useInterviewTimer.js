import { useEffect, useState } from "react";

function useInterviewTimer(
  initialTime = 15 * 60,
  isPaused = false,
  isInterviewEnded = false
) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (isPaused || isInterviewEnded) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, isInterviewEnded]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return {
    timeLeft,
    formattedTime,
  };
}

export default useInterviewTimer;