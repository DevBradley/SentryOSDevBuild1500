/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite18 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "IMG_20230604_162603_1",
        "./Sprite18/costumes/IMG_20230604_162603_1.png",
        { x: 114, y: -119 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite18/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Wlpprcls" },
        this.whenIReceiveWlpprcls
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Wlpprsctn" },
        this.whenIReceiveWlpprsctn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settingscls" },
        this.whenIReceiveSettingscls
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nomobile" },
        this.whenIReceiveNomobile
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "mblcls" },
        this.whenIReceiveMblcls
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(40, 84);
    this.visible = false;
  }

  *whenIReceiveWlpprcls() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Mobile");
    this.visible = false;
  }

  *whenIReceiveWlpprsctn() {
    this.visible = false;
  }

  *whenIReceiveSettingscls() {
    this.visible = false;
  }

  *whenIReceiveNomobile() {
    this.visible = true;
  }

  *whenIReceiveMblcls() {
    this.visible = false;
  }
}
