/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite56 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite56/costumes/costume1.svg", {
        x: 37.553271028037415,
        y: 18.099999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite56/sounds/pop.wav")];

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
    this.goto(5, 51);
    this.visible = false;
  }

  *whenIReceiveThemeopen() {
    this.visible = true;
  }

  *whenIReceiveThemeclose() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("light theme");
    this.stage.costume = "backdrop2";
  }

  *whenIReceiveSettingscls() {
    this.visible = false;
  }
}
