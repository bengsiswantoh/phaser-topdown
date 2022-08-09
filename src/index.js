import * as Phaser from "phaser";

import LoadingScene from "./scenes/LoadingScene";
import MainScene from "./scenes/MainScene";

const parent = "game";
const div = document.getElementById(parent);

const config = {
  parent,
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [LoadingScene, MainScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};

window.game = new Phaser.Game(config);
