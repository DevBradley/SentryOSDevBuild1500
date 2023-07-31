/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 133.027805,
        y: 29.534185000000008
      }),
      new Costume("costume2", "./Sprite4/costumes/costume2.svg", {
        x: 133.027805,
        y: 29.534185000000008
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Login" }, this.whenIReceiveLogin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OffSig" },
        this.whenIReceiveOffsig
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
    this.visible = false;
    this.goto(0, -197);
  }

  *whenIReceiveLogin() {
    this.moveBehind();
    this.visible = true;
    this.goto(5, -165);
    yield* this.glide(1, 5, -143);
  }

  *whenIReceiveOffsig() {
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
