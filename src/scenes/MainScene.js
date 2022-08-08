import * as Phaser from "phaser";

import Character from "../Character";

export default class MainScene extends Phaser.Scene {
  character;
  princess;

  constructor() {
    super("MainScene");
  }

  preload() {}

  create() {
    // this.add.image(400, 300, "blue-ninja-dead");
    this.character = new Character("blue-ninja", this, 100, 100);

    // this.input.mouse.disableContextMenu();
  }

  update() {
    this.character.update();

    var pointer = this.input.activePointer;
    if (pointer.isDown) {
      this.character.moveTo(pointer.worldX, pointer.worldY);
    }
  }
}
