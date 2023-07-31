/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite46 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite46/costumes/costume1.svg", {
        x: 27.652800000000013,
        y: -3.698180000000008
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite46/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Openapp2" },
        this.whenIReceiveOpenapp2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Menu2open" },
        this.whenIReceiveMenu2open
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Recoverysys" },
        this.whenIReceiveRecoverysys
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("Closeapp2");
  }

  *whenIReceiveOpenapp2() {
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveMenu2open() {
    this.visible = false;
  }

  *whenIReceiveRecoverysys() {
    this.visible = false;
    this.costume = "costume1";
    this.goto(146, 103);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
