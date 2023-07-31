/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite43 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite43/costumes/costume1.svg", {
        x: 27.65227127075198,
        y: 7.077436447143555
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite43/sounds/pop.wav")];

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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Filesclose" },
        this.whenIReceiveFilesclose
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(67, 0);
    this.visible = false;
  }

  *whenIReceiveSysSysno() {
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveSyssysnono() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Recovery");
    this.broadcast("OffSig");
    this.stage.costume = "backdrop5";
    this.visible = false;
  }

  *whenIReceiveFilesclose() {
    this.visible = false;
  }

  *whenthisspriteclicked2() {
    this.broadcast("Storecls");
    this.broadcast("Settingscls");
    this.broadcast("Filesclose");
    this.broadcast("Storecls");
    this.visible = false;
    this.broadcast("Storecls");
    this.broadcast("Settingscls");
    this.broadcast("Syssysnono");
  }
}
