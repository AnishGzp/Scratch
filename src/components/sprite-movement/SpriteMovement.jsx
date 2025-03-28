import "./spriteMovement.css";

import React from "react";

import { moveForward } from "../../utils/motion.js";

function SpriteMovement(props) {
  const { onRunClicked } = props;

  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="sprite_movement">
      <div className="buttons">
        <button className="run" onClick={onRunClicked}>
          Run
        </button>
        <button className="stop">Stop</button>
      </div>
      <img src="/images/sprite.svg" alt="sprite" id="sprite1" style={styles} />
    </div>
  );
}

styles = {
  transform: `translate(${position.x}px, ${position.y}px)`,
  transition: "transform 0.5s ease",
};

export default SpriteMovement;
