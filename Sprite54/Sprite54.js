/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite54 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite54/costumes/costume1.svg", {
        x: 38,
        y: 19
      }),
      new Costume("costume2", "./Sprite54/costumes/costume2.svg", {
        x: 38,
        y: 19
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite54/sounds/pop.wav")];

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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dark theme" },
        this.whenIReceiveDarkTheme
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "light theme" },
        this.whenIReceiveLightTheme
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.goto(130, 76);
    this.visible = false;
  }

  *whenIReceiveWifiset() {
    this.visible = true;
  }

  *whenIReceiveWifisetno() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("wifioff");
  }

  *whenIReceiveDarkTheme() {
    this.costume = "costume2";
  }

  *whenIReceiveLightTheme() {
    this.costume = "costume1";
  }
}
