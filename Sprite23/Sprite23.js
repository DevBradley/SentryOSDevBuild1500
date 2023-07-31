/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite23 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite23/costumes/costume1.svg", {
        x: 30.41463999999999,
        y: 41.61134999999999
      }),
      new Costume("costume2", "./Sprite23/costumes/costume2.svg", {
        x: 30.414642333984318,
        y: 41.61134987452289
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite23/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Poweroptions" },
        this.whenIReceivePoweroptions
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OffSig" },
        this.whenIReceiveOffsig
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NoOptionpower" },
        this.whenIReceiveNooptionpower
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Logout" },
        this.whenIReceiveLogout
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
    this.goto(-206, 108);
    this.visible = false;
  }

  *whenIReceivePoweroptions() {
    this.visible = true;
    this.goto(-206, 174);
    yield* this.glide(0.1, -206, 108);
    this.broadcast("Poweroptions2");
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveNooptionpower() {
    this.visible = false;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }

  *whenIReceiveLightTheme() {
    this.costume = "costume1";
  }

  *whenIReceiveDarkTheme() {
    this.costume = "costume2";
  }
}
