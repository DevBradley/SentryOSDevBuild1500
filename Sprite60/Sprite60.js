/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite60 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite60/costumes/costume1.svg", {
        x: 45.00000499321027,
        y: 15.5
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite60/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DiskUtils" },
        this.whenIReceiveDiskutils
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Recovery" },
        this.whenIReceiveRecovery
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DiskStart" },
        this.whenIReceiveDiskstart
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(68, 0);
    this.visible = false;
  }

  *whenIReceiveDiskutils() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "backdrop1";
    this.stage.vars.diskutils = 0;
    this.broadcast("Recovery");
    this.visible = false;
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }

  *whenIReceiveRecovery() {
    this.visible = false;
  }

  *whenIReceiveDiskstart() {
    this.visible = false;
  }
}
