import "./spriteMovement.css";

import React from "react";

import { moveForward } from "../../utils/motion.js";

function SpriteMovement(props) {
  const { onRunClicked } = props;

  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="sprite_movement">
      <div className="buttons">
        <button className="run" onClick={onRunClicked}>Run</button>
        <button className="stop">Stop</button>
      </div>
      <div className="sprite_container" id="sprite1">
        <div className="msg">{msg}</div>
        <div className="think"></div>
        <img src="/images/sprite.svg" alt="sprite" />
      </div>
    </div>
  );
}

export default SpriteMovement;