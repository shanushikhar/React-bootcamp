import { useEffect, useState } from "react";

const useCounter = (count = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      count
        ? setCounter((count) => count + 1)
        : setCounter((count) => count - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};
export default useCounter;
