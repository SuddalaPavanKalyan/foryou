import { useEffect, useRef, useState } from "react";

export const useCardService = <T>(items: T[]) => {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const inBounds = (i: number) => i >= 0 && i < items.length;

  const getCurrent = () => items[index];

  const back = (steps: number = 1) => {
    const newIndex = index - steps;
    if (inBounds(newIndex)) setIndex(newIndex);
  };

  const forward = (steps: number = 1) => {
    const next = index + steps;
    if (inBounds(next)) {
      setIndex(next);
    } else {
      setIndex(0);
    }
  };

  const reset = () => setIndex(0);

  const startAutoRotate = (interval: number) => {
    if (timer.current) return;

    timer.current = setInterval(() => {
      setIndex((prev) => (prev + 1 < items.length ? prev + 1 : 0));
    }, interval);
  };

  const stopAutoRotate = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    return () => stopAutoRotate();
  }, []);

  return {
    index,
    getCurrent,
    back,
    forward,
    reset,
    startAutoRotate,
    stopAutoRotate
  };
};
