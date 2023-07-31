/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite41 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite41/costumes/costume1.svg", {
        x: 40.86759948730466,
        y: 32.41742451985678
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite41/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sys.sysno" },
        this.whenIReceiveSysSysno
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Syssysnono" },
        this.whenIReceiveSyssysnono
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Filesclose" },
        this.whenIReceiveFilesclose
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(72, -16);
    this.moveAhead();
    this.visible = false;
  }

  *whenIReceiveSysSysno() {
    this.visible = true;
  }

  *whenIReceiveSyssysnono() {
    this.visible = false;
  }

  *whenIReceiveFilesclose() {
    this.visible = false;
  }
}
