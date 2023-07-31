/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite39 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite39/costumes/costume1.svg", {
        x: 7.8125,
        y: 7.5625
      }),
      new Costume("costume2", "./Sprite39/costumes/costume2.svg", {
        x: 7.8125,
        y: 7.5625
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite39/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Readme.txt" },
        this.whenIReceiveReadmeTxt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ReadMe.txtclsfile" },
        this.whenIReceiveReadmeTxtclsfile
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Storeopen" },
        this.whenIReceiveStoreopen
      ),
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
    this.goto(40, 99);
    for (let i = 0; i < 64634; i++) {
      this.moveAhead();
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveReadmeTxt() {
    this.costume = "costume1";
    this.visible = true;
  }

  *whenIReceiveReadmeTxtclsfile() {
    this.visible = false;
  }

  *whenIReceiveStoreopen() {
    this.broadcast("ReadMe.txtclsfile");
  }

  *whenIReceiveSettings() {
    this.broadcast("ReadMe.txtclsfile");
  }

  *whenthisspriteclicked() {
    this.costume = "costume2";
    this.size -= 10;
    yield* this.wait(0.3);
    this.size += 10;
    this.costume = "costume1";
    this.broadcast("ReadMe.txtclsfile");
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
