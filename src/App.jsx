import "./App.css";

import React, { useEffect, useState } from "react";
import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

import {
  Navbar,
  SpriteMovement,
  SpriteControl,
  defineCustomBlocks,
  toolbox,
  defineJsGenerators,
} from "./components/index";

import { onRunClicked } from "./utils/event.js";

function App() {
  const [codeToRun, setCodeToRun] = useState("");

  useEffect(() => {
    window.onRunClicked = onRunClicked;

    // Define blocks and generators from external files
    defineCustomBlocks();
    defineJsGenerators();

    // Initialize Blockly with toolbox
    const workspace = Blockly.inject("blocklyDiv", { toolbox });

    // Generate code on workspace change
    const generateCode = () => {
      const code = javascriptGenerator.workspaceToCode(workspace);
      console.log("Generated Code:\n", code);

      setCodeToRun(code);
    };
    workspace.addChangeListener(generateCode);

    return () => {
      workspace.dispose();
      delete window.onRunClicked;
    }; // Clean up
  }, []);

  const executeGeneratedCode = () => {
    try {
      if (codeToRun.includes("onRunClicked")) {
        const cleanCode = codeToRun.replace("// Run Block\n", ""); // Exclude run block
        new Function(cleanCode)();
      } else {
        console.warn(
          "onRunClicked function not found. Code execution skipped."
        );
      }
    } catch (error) {
      console.error("Error running code:", error);
    }
  };

  return (
    <main>
      <header>
        <Navbar />
      </header>
      <div className="container">
        <div className="blockly_container">
          <div id="blocklyDiv"></div>
        </div>
        <div className="sprite_area">
          <SpriteMovement onRunClicked={executeGeneratedCode} />
          <SpriteControl />
        </div>
      </div>
    </main>
  );
}

export default App;
