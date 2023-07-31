/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite10/costumes/costume1.svg", {
        x: -0.9223100000000102,
        y: -1.8963899999999967
      }),
      new Costume("costume2", "./Sprite10/costumes/costume2.svg", {
        x: -4.884753363167903,
        y: -4.607046154076016
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite10/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OffSig" },
        this.whenIReceiveOffsig
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mobile" },
        this.whenIReceiveMobile
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nomobile" },
        this.whenIReceiveNomobile
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Storeopen" },
        this.whenIReceiveStoreopen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Recovery" },
        this.whenIReceiveRecovery
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.moveAhead();
    this.costume = "costume1";
    this.visible = true;
    while (true) {
      this.moveAhead();
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.costume = "costume2";
    yield* this.wait(0.1);
    this.costume = "costume1";
  }

  *whenIReceiveMobile() {
    this.visible = false;
  }

  *whenIReceiveNomobile() {
    this.visible = true;
  }

  *whenIReceiveStoreopen() {
    this.broadcast("Settingscls");
  }

  *whenIReceiveRecovery() {
    this.visible = false;
  }
}
