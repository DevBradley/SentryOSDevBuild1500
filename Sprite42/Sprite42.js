/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite42 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite42/costumes/costume1.svg", {
        x: 22.735772995572518,
        y: 23.87763000000001
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite42/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Files" }, this.whenIReceiveFiles),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Filesclose" },
        this.whenIReceiveFilesclose
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Recovery" },
        this.whenIReceiveRecovery
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OffSig" },
        this.whenIReceiveOffsig
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(43, 47);
    this.visible = false;
  }

  *whenIReceiveFiles() {
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveFilesclose() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Syssysnono");
  }

  *whenIReceiveRecovery() {
    this.visible = false;
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }
}
