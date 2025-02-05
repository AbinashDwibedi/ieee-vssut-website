import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function CelebrationEffect() {
  const [showConfetti, setShowConfetti] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <>
      {showConfetti && (
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 ,opacity:0.5}}>
          <Confetti
            width={width - 30}
            height={height - 30}
            numberOfPieces={100}
            gravity={0.04}
            recycle={true}
          />
        </div>
      )}
    </>
  );
}

export default CelebrationEffect;
