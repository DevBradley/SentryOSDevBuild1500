/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "IMG_20230604_162603_1",
        "./Sprite16/costumes/IMG_20230604_162603_1.svg",
        { x: 57.547637910698654, y: 42.35354251299816 }
      ),
      new Costume(
        "ss_01049029917f90953b6a7f23cab19ddaa43b15f2",
        "./Sprite16/costumes/ss_01049029917f90953b6a7f23cab19ddaa43b15f2.png",
        { x: 116, y: 65 }
      ),
      new Costume("costume2", "./Sprite16/costumes/costume2.svg", {
        x: 57,
        y: 39.05600449707035
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite16/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settingscls" },
        this.whenIReceiveSettingscls
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bckgrndchng" },
        this.whenIReceiveBckgrndchng
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Wlpprcls" },
        this.whenIReceiveWlpprcls
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "IMG_20230604_162603_1";
  }

  *whenIReceiveSettingscls() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "backdrop2";
    this.broadcast("Bgc2");
    this.visible = false;
  }

  *whenIReceiveBckgrndchng() {
    this.goto(39, 26);
    this.visible = true;
  }

  *whenIReceiveWlpprcls() {
    this.visible = false;
  }
}
