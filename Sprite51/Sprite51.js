/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite51 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite51/costumes/costume1.svg", {
        x: 70.5,
        y: 46.5
      }),
      new Costume("costume2", "./Sprite51/costumes/costume2.svg", {
        x: 70.5,
        y: 46.5
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite51/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wifiset" },
        this.whenIReceiveWifiset
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wifisetno" },
        this.whenIReceiveWifisetno
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "light theme" },
        this.whenIReceiveLightTheme
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dark theme" },
        this.whenIReceiveDarkTheme
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.goto(156, 99);
    this.visible = false;
  }

  *whenIReceiveWifiset() {
    this.visible = true;
    this.broadcast("wifi2set");
    this.goto(156, 200);
    yield* this.glide(0.2, 156, 99);
  }

  *whenIReceiveWifisetno() {
    this.visible = false;
  }

  *whenIReceiveLightTheme() {
    this.costume = "costume1";
  }

  *whenIReceiveDarkTheme() {
    this.costume = "costume2";
  }
}
