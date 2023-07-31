/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite9/costumes/costume1.svg", {
        x: 14.544279999999986,
        y: 18.986019999999996
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Login" }, this.whenIReceiveLogin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NoOptionpower" },
        this.whenIReceiveNooptionpower
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Logout" },
        this.whenIReceiveLogout
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Recovery" },
        this.whenIReceiveRecovery
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-215, 161);
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.size -= 10;
    yield* this.wait(0.1);
    this.size += 10;
    this.broadcast("Poweroptions");
    this.visible = false;
  }

  *whenIReceiveLogin() {
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveNooptionpower() {
    this.visible = true;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }

  *whenIReceiveRecovery() {
    this.visible = false;
  }
}
