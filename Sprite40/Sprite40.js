/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite40 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite40/costumes/costume1.svg", {
        x: 22.735772995572518,
        y: 23.87763000000001
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite40/sounds/pop.wav")];

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
        { name: "Syssysnono" },
        this.whenIReceiveSyssysnono
      ),
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
    this.broadcast("Sys.sysno");
    this.visible = false;
  }

  *whenIReceiveSyssysnono() {
    this.visible = true;
  }

  *whenIReceiveRecovery() {
    for (let i = 0; i < 5687684; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }
}
