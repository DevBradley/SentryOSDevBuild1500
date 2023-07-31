/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite28 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite28/costumes/costume1.svg", {
        x: 7.8125,
        y: 7.5625
      }),
      new Costume("costume2", "./Sprite28/costumes/costume2.svg", {
        x: 7.8125,
        y: 7.5625
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite28/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Storeopen" },
        this.whenIReceiveStoreopen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Storecls" },
        this.whenIReceiveStorecls
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(109, 91);
    this.visible = false;
  }

  *whenIReceiveStoreopen() {
    this.costume = "costume1";
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveStorecls() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.costume = "costume2";
    this.size -= 10;
    yield* this.wait(0.3);
    this.size += 10;
    this.costume = "costume1";
    this.broadcast("Storecls");
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
