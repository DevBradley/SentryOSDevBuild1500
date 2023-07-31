/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite64 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite64/costumes/costume1.svg", {
        x: 18.204746477230316,
        y: 14.071389218685255
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite64/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SentryWebDownload" },
        this.whenIReceiveSentrywebdownload
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
    this.moveBehind();
    this.visible = false;
    while (true) {
      this.goto(-196, 61);
      yield;
    }
  }

  *whenIReceiveSentrywebdownload() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Web");
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }

  *whenIReceiveLogin() {
    if (this.toNumber(this.stage.vars.sentrywebinstalled) === 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}
