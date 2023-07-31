/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite20 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite20/costumes/costume1.svg", {
        x: 13.766616407651156,
        y: 19.072740123116716
      }),
      new Costume("costume2", "./Sprite20/costumes/costume2.svg", {
        x: 14.121502202302395,
        y: 16.599409075410733
      }),
      new Costume("costume3", "./Sprite20/costumes/costume3.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite20/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "Login" }, this.whenIReceiveLogin),
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "wifion" },
        this.whenIReceiveWifion
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wifioff" },
        this.whenIReceiveWifioff
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wifisetno" },
        this.whenIReceiveWifisetno
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DiskStart" },
        this.whenIReceiveDiskstart
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.stage.vars.nowifi = 0;
    this.goto(191, 159);
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
  }

  *whenIReceiveLogin() {
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }

  *whenIReceiveWifion() {
    this.costume = "costume1";
  }

  *whenIReceiveWifioff() {
    this.costume = "costume2";
  }

  *whenthisspriteclicked() {
    this.broadcast("wifiset");
    this.visible = false;
  }

  *whenIReceiveWifisetno() {
    this.visible = true;
  }

  *whenIReceiveDiskstart() {
    this.visible = false;
    yield* this.wait(4);
    this.visible = true;
  }
}
