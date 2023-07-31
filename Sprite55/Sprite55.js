/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite55 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite55/costumes/costume1.svg", {
        x: 30.35432,
        y: 9.575350000000014
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite55/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings" },
        this.whenIReceiveSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settingscls" },
        this.whenIReceiveSettingscls
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-85, -22);
    this.visible = false;
  }

  *whenIReceiveSettings() {
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveSettingscls() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("themeopen");
    this.broadcast("Wlpprcls");
    this.broadcast("Dvmc");
    this.broadcast("mblcls");
  }
}
