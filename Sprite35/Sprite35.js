/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite35 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite35/costumes/costume1.svg", {
        x: 120.77044499999997,
        y: 80.43298500000006
      }),
      new Costume("costume2", "./Sprite35/costumes/costume2.svg", {
        x: 121.45595073645134,
        y: 93.07551500000004
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite35/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Files" }, this.whenIReceiveFiles),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Filesclose" },
        this.whenIReceiveFilesclose
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Filesclose" },
        this.whenIReceiveFilesclose2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 7);
    this.visible = false;
    this.moveBehind();
  }

  *whenIReceiveFiles() {
    this.visible = true;
    this.costume = "costume1";
    yield* this.wait(1);
    this.costume = "costume2";
  }

  *whenIReceiveFilesclose() {
    this.visible = false;
  }

  *whenIReceiveFilesclose2() {
    this.visible = false;
  }
}
