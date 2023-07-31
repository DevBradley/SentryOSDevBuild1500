/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite13 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite13/costumes/costume1.svg", {
        x: 7.8125,
        y: 7.5625
      }),
      new Costume("costume2", "./Sprite13/costumes/costume2.svg", {
        x: 7.8125,
        y: 7.5625
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite13/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings" },
        this.whenIReceiveSettings
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(109, 91);
    this.visible = false;
  }

  *whenIReceiveSettings() {
    this.costume = "costume1";
    yield* this.wait(1);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.costume = "costume2";
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
    this.costume = "costume1";
    this.broadcast("Settingscls");
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }
}
