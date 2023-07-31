/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite57 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite57/costumes/costume1.svg", {
        x: 37.55326999999997,
        y: 18.100000000000023
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite57/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "themeopen" },
        this.whenIReceiveThemeopen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "themeclose" },
        this.whenIReceiveThemeclose
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settingscls" },
        this.whenIReceiveSettingscls
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(5, 12);
    this.visible = false;
  }

  *whenIReceiveThemeopen() {
    this.visible = true;
  }

  *whenIReceiveThemeclose() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("dark theme");
  }

  *whenIReceiveSettingscls() {
    this.visible = false;
  }
}
