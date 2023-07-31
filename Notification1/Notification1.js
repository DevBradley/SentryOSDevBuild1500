/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Notification1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Notification1/costumes/costume1.svg", {
        x: 66.38045759659272,
        y: 37.89900491155976
      })
    ];

    this.sounds = [new Sound("pop", "./Notification1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Login" }, this.whenIReceiveLogin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Logout" },
        this.whenIReceiveLogout
      )
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.goto(188, -129);
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.visible = false;
  }

  *whenIReceiveLogin() {
    yield* this.wait(1);
    this.broadcast("Notification");
    this.visible = true;
    this.goto(270, -129);
    yield* this.glide(0.5, 188, -129);
    yield* this.wait(3);
    yield* this.glide(0.5, 270, -129);
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveLogout() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
