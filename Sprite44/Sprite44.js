/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite44 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite44/costumes/costume1.svg", {
        x: 23.931793212890625,
        y: 24.01416015625
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite44/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Recovery" },
        this.whenIReceiveRecovery
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-214, 58);
    this.visible = false;
  }

  *whenIReceiveRecovery() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "backdrop6";
    this.broadcast("Recoverysys");
    this.visible = false;
  }
}
