/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite50 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite50/costumes/costume1.svg", {
        x: 76.026975,
        y: 24.545980843373513
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite50/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settingscls" },
        this.whenIReceiveSettingscls
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DEVmode" },
        this.whenIReceiveDevmode
      ),
      new Trigger(Trigger.BROADCAST, { name: "Dvmc" }, this.whenIReceiveDvmc)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(40, 7);
    this.visible = false;
    this.moveAhead();
  }

  *whenthisspriteclicked() {
    this.stage.watchers.fileManagerInstalled.visible = false;
    this.stage.watchers.thingInstalled.visible = false;
    this.stage.watchers.nowifi.visible = false;
    this.stage.watchers.sentrywebinstalled.visible = false;
    this.broadcast("noDEVmode");
    this.visible = false;
    this.broadcast("Wlpprcls");
    this.broadcast("Dvmd");
  }

  *whenIReceiveSettingscls() {
    this.visible = false;
  }

  *whenIReceiveDevmode() {
    this.visible = true;
  }

  *whenIReceiveDvmc() {
    this.visible = false;
  }
}
