import Confetti from "react-confetti";
import useWindowSize from "../hooks/useWindowSize";

function ConfettiCelebration({ show }) {
  const { width, height } = useWindowSize();

  return show ? <Confetti width={width} height={height} /> : null;
}

export default ConfettiCelebration;
