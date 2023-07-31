/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 33.746455,
        y: 38.984015
      }),
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 33.746455000000026,
        y: 38.984015
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Login" }, this.whenIReceiveLogin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Logout" },
        this.whenIReceiveLogout
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OffSig" },
        this.whenIReceiveOffsig
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "light theme" },
        this.whenIReceiveLightTheme
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dark theme" },
        this.whenIReceiveDarkTheme
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.goto(6, -157);
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Storeopen");
    this.size -= 20;
    yield* this.wait(0.4);
    this.size += 20;
  }

  *whenIReceiveLogin() {
    yield* this.wait(1);
    this.visible = true;
    while (true) {
      this.size = 100;
      if (this.touching("mouse")) {
        this.size += 10;
      } else {
        this.size -= 10;
      }
      yield;
    }
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveLightTheme() {
    this.costume = "costume1";
  }

  *whenIReceiveDarkTheme() {
    this.costume = "costume2";
  }
}
