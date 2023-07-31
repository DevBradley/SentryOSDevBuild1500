/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite36 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite36/costumes/costume1.svg", {
        x: 7.8125,
        y: 7.5625
      }),
      new Costume("costume2", "./Sprite36/costumes/costume2.svg", {
        x: 7.8125,
        y: 7.5625
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite36/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Files" }, this.whenIReceiveFiles),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Filesclose" },
        this.whenIReceiveFilesclose
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(109, 91);
    this.visible = false;
  }

  *whenIReceiveFiles() {
    this.costume = "costume1";
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveFilesclose() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.costume = "costume2";
    this.size -= 10;
    yield* this.wait(0.3);
    this.size += 10;
    this.costume = "costume1";
    this.broadcast("Filesclose");
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
