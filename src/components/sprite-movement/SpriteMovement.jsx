import "./spriteMovement.css";
import React, { useState } from "react";

function SpriteMovement(props) {
  const { onRunClicked } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const styles = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: "transform 0.5s ease",
  };

  return (
    <div className="sprite_movement">
      <div className="buttons">
        <button className="run" onClick={onRunClicked}>Run</button>
        <button className="stop">Stop</button>
      </div>
      <img src="/images/sprite.svg" alt="sprite" id="sprite1" style={styles} />
    </div>
  );
}

export default SpriteMovement;