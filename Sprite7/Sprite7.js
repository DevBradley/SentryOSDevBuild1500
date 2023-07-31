/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.svg", {
        x: 25.526870727539062,
        y: 21.07415485261575
      }),
      new Costume("costume2", "./Sprite7/costumes/costume2.svg", {
        x: 25.526870000000002,
        y: 21.074164999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MenuOpen" },
        this.whenIReceiveMenuopen
      ),
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
    this.costume = "costume1";
    this.goto(-90, -146);
    this.visible = false;
  }

  *whenIReceiveMenuopen() {
    this.costume = "costume2";
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("MenuClose");
    this.size -= 20;
    yield* this.wait(0.4);
    this.size += 20;
    this.visible = false;
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }
}
