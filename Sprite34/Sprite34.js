/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite34 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite34/costumes/costume1.svg", {
        x: 35.76707878632811,
        y: 12.20494515555248
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite34/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MenuOpen" },
        this.whenIReceiveMenuopen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MenuClose" },
        this.whenIReceiveMenuclose
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-87, 65);
    this.visible = false;
  }

  *whenIReceiveMenuopen() {
    yield* this.wait(0.2);
    this.visible = true;
  }

  *whenIReceiveMenuclose() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    yield* this.askAndWait("");
    if (this.answer === "Store") {
      this.broadcast("Storeopen");
    }
    if (this.answer === "Settings") {
      this.broadcast("Settings");
    }
    if (this.answer === "store") {
      this.broadcast("Storeopen");
    }
    if (this.answer === "settings") {
      this.broadcast("Settings");
    }
  }
}
