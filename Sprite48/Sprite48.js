/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite48 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite48/costumes/costume1.svg", {
        x: 43.014167521113336,
        y: 38.135721842447964
      }),
      new Costume("costume3", "./Sprite48/costumes/costume3.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite48/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Recoverysys" },
        this.whenIReceiveRecoverysys
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Menu2open" },
        this.whenIReceiveMenu2open
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DiskUtils" },
        this.whenIReceiveDiskutils
      )
    ];
  }

  *whenIReceiveRecoverysys() {
    this.visible = false;
    this.costume = "costume1";
    this.goto(-188, -146);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Menu2close");
    this.visible = false;
  }

  *whenIReceiveMenu2open() {
    this.visible = true;
  }

  *whenIReceiveDiskutils() {
    this.visible = false;
  }
}
