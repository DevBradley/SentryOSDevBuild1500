/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite17 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite17/costumes/costume1.svg", {
        x: 30.35431914306639,
        y: 9.575350000000014
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite17/sounds/pop.wav")];

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
    this.goto(-85, 65);
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
    this.broadcast("Wlpprsctn");
    this.broadcast("Dvmc");
    this.broadcast("mblcls");
    this.broadcast("themeclose");
  }
}
