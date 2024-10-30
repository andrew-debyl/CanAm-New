import CountUp from "react-countup";
import useVisibility from "./UseVisibility";

const Counter = ({ end, decimals }) => {
  const [isVisible, ref] = useVisibility();

  return (
    <span className="odometer" ref={ref}>
      {isVisible && (
        <CountUp
          end={end ? end : 100}
          duration={1}
          decimals={decimals ? decimals : 0}
        />
      )}
    </span>
  );
};

export default Counter;
