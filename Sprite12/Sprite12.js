/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite12 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite12/costumes/costume1.svg", {
        x: 120.770445,
        y: 80.432985
      }),
      new Costume("costume3", "./Sprite12/costumes/costume3.svg", {
        x: 120.77043499999999,
        y: 80.43298500000002
      }),
      new Costume("costume2", "./Sprite12/costumes/costume2.svg", {
        x: 120.770435,
        y: 93.075535
      }),
      new Costume("costume4", "./Sprite12/costumes/costume4.svg", {
        x: 120.77042500000002,
        y: 93.07552500000001
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite12/sounds/pop.wav")];

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
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSettings() {
    this.goto(0, 7);
    this.moveBehind();
    this.visible = true;
    this.costume = "costume1";
    yield* this.wait(1);
    this.costume = "costume2";
  }

  *whenIReceiveSettingscls() {
    this.visible = false;
  }
}
