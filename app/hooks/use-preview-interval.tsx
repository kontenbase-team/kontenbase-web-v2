import { useCallback, useEffect, useRef, useState } from "react";

export const usePreviewInterval = (
  data: Record<string, string>[],
  delay: number,
) => {
  const intervalRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const currInterval = useCallback(() => {
    return setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === data.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, delay);
  }, [data.length, delay]);

  const handleStartInterval = useCallback(() => {
    intervalRef.current = currInterval();
  }, [currInterval]);

  const handleStopInterval = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    handleStartInterval();
  }, [handleStartInterval, currInterval]);

  return {
    activeIndex,
    handleStartInterval,
    handleStopInterval,
    setActiveIndex,
  };
};
