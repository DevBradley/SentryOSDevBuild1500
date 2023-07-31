/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite11/costumes/costume1.svg", {
        x: 33.32567499999999,
        y: 29.054249999999996
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite11/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Login" }, this.whenIReceiveLogin),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OffSig" },
        this.whenIReceiveOffsig
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Logout" },
        this.whenIReceiveLogout
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(104, -148);
    this.visible = false;
  }

  *whenIReceiveLogin() {
    yield* this.wait(1);
    this.visible = true;
    while (true) {
      this.size = 100;
      if (this.touching("mouse")) {
        this.size += 10;
      } else {
        this.size -= 10;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("Settings");
    this.size -= 20;
    yield* this.wait(0.4);
    this.size += 20;
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }
}
