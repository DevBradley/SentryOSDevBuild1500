/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 25.526870727539062,
        y: 21.07415485261575
      }),
      new Costume("costume2", "./Sprite6/costumes/costume2.svg", {
        x: 25.526870000000002,
        y: 21.074164999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Login" }, this.whenIReceiveLogin),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MenuClose" },
        this.whenIReceiveMenuclose
      ),
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
    this.costume = "costume1";
    this.goto(-90, -146);
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
    this.broadcast("MenuOpen");
    this.costume = "costume2";
    this.size -= 20;
    yield* this.wait(0.4);
    this.size += 20;
    this.visible = false;
  }

  *whenIReceiveMenuclose() {
    this.costume = "costume1";
    this.visible = true;
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }
}
