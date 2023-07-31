/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite38 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Sprite38/costumes/costume2.svg", {
        x: 52.98635999999999,
        y: 104.43357992099327
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite38/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Readme.txt" },
        this.whenIReceiveReadmeTxt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ReadMe.txtclsfile" },
        this.whenIReceiveReadmeTxtclsfile
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 7);
    this.visible = false;
    this.moveAhead();
  }

  *whenIReceiveReadmeTxt() {
    this.visible = true;
  }

  *whenIReceiveReadmeTxtclsfile() {
    this.visible = false;
  }
}
