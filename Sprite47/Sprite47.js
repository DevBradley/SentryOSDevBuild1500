/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite47 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite47/costumes/costume1.svg", {
        x: 48.9193115234375,
        y: 62.98248291015625
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite47/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Menu2open" },
        this.whenIReceiveMenu2open
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Menu2close" },
        this.whenIReceiveMenu2close
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Recoverysys" },
        this.whenIReceiveRecoverysys
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveMenu2open() {
    this.visible = true;
  }

  *whenIReceiveMenu2close() {
    this.visible = false;
  }

  *whenIReceiveRecoverysys() {
    this.goto(-189, 3);
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
