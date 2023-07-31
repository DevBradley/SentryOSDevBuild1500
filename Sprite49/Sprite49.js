/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite49 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite49/costumes/costume1.svg", {
        x: -1.8813010774632062,
        y: -2.1109011778829085
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite49/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OffSig" },
        this.whenIReceiveOffsig
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Recovery" },
        this.whenIReceiveRecovery
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveRecovery() {
    this.visible = true;
    this.moveAhead();
    this.costume = "costume1";
    while (true) {
      this.visible = true;
      this.moveAhead();
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }
}
