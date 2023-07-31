/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite22 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite22/costumes/costume1.svg", {
        x: 76.026975,
        y: 24.545980843373513
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite22/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Dvmd" }, this.whenIReceiveDvmd),
      new Trigger(Trigger.BROADCAST, { name: "Dvmc" }, this.whenIReceiveDvmc),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settingscls" },
        this.whenIReceiveSettingscls
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "noDEVmode" },
        this.whenIReceiveNodevmode
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(40, 7);
    this.visible = false;
    this.moveAhead();
  }

  *whenIReceiveDvmd() {
    this.visible = true;
  }

  *whenIReceiveDvmc() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Wlpprcls");
    this.broadcast("Dvmd");
  }

  *whenIReceiveSettingscls() {
    this.visible = false;
  }

  *whenthisspriteclicked2() {
    this.stage.watchers.thingInstalled.visible = true;
    this.stage.watchers.fileManagerInstalled.visible = true;
    this.stage.watchers.nowifi.visible = true;
    this.stage.watchers.sentrywebinstalled.visible = true;
    this.broadcast("DEVmode");
    this.visible = false;
  }

  *whenIReceiveNodevmode() {
    this.visible = true;
  }
}
