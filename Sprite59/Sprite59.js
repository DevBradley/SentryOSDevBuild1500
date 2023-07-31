/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite59 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite59/costumes/costume1.svg", {
        x: 28.375,
        y: 24
      }),
      new Costume("costume2", "./Sprite59/costumes/costume2.svg", {
        x: 14.383747178329571,
        y: 18.662965575620717
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite59/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "thing.program" },
        this.whenIReceiveThingProgram
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Logout" },
        this.whenIReceiveLogout
      ),
      new Trigger(Trigger.BROADCAST, { name: "Login" }, this.whenIReceiveLogin),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Recovery" },
        this.whenIReceiveRecovery
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OffSig" },
        this.whenIReceiveOffsig
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.goto(-192, -119);
    this.visible = false;
  }

  *whenIReceiveThingProgram() {
    /* TODO: Implement sensing_setdragmode */ null;
    this.stage.vars.thingInstalled = 1;
    this.visible = true;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }

  *whenIReceiveLogin() {
    if (this.toNumber(this.stage.vars.thingInstalled) === 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        yield* this.sayAndWait("Hi!", 2);
      }
      yield;
    }
  }

  *whenIReceiveRecovery() {
    this.costume = "costume2";
    this.visible = false;
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }
}
