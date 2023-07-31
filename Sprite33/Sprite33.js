/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite33 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite33/costumes/costume1.svg", {
        x: 18.178484999999995,
        y: 17.892734999999988
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite33/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sfdown" },
        this.whenIReceiveSfdown
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OffSig" },
        this.whenIReceiveOffsig
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Logout" },
        this.whenIReceiveLogout
      ),
      new Trigger(Trigger.BROADCAST, { name: "Login" }, this.whenIReceiveLogin)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-201, 121);
    this.moveBehind();
    this.visible = false;
  }

  *whenIReceiveSfdown() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Files");
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }

  *whenIReceiveLogin() {
    if (this.toNumber(this.stage.vars.fileManagerInstalled) === 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}
