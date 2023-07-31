/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 57.57075499321027,
        y: 15.5
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

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
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-63, 0);
    this.visible = false;
  }

  *whenIReceiveDiskutils() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "backdrop1";
    this.broadcast("Start");
    this.broadcast("DiskStart");
    this.visible = false;
    while (true) {
      this.stage.vars.diskutils = 0;
      yield;
    }
  }

  *whenIReceiveRecovery() {
    this.stage.costume = "backdrop5";
    this.visible = false;
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
