/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 37.78457160534407,
        y: 119.21776033735209
      }),
      new Costume("costume2", "./Sprite3/costumes/costume2.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Logout" },
        this.whenIReceiveLogout
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DiskUtils" },
        this.whenIReceiveDiskutils
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DiskStart" },
        this.whenIReceiveDiskstart
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.goto(0, -71);
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Login");
    this.visible = false;
    this.costume = "costume2";
  }

  *whenIReceiveLogout() {
    this.costume = "costume1";
    this.visible = true;
  }

  *whenIReceiveDiskutils() {
    this.visible = false;
  }

  *whenIReceiveDiskstart() {
    this.visible = false;
    yield* this.wait(4);
    this.visible = true;
    this.stage.costume = "backdrop2";
  }
}
