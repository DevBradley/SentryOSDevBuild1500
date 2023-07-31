/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite21 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite21/costumes/costume1.svg", {
        x: 30.35432,
        y: 9.93925336423888
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite21/sounds/pop.wav")];

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
    this.goto(-85, 8);
    this.visible = false;
    this.moveAhead();
  }

  *whenIReceiveSettings() {
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveSettingscls() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Wlpprcls");
    this.broadcast("Dvmd");
    this.broadcast("mblcls");
    this.broadcast("themeclose");
  }
}
