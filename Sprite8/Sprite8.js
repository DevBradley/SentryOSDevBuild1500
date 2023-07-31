/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 26.081217447916657,
        y: 139.623090643672
      }),
      new Costume("costume2", "./Sprite8/costumes/costume2.svg", {
        x: 26.081217447916657,
        y: 139.623100643672
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MenuOpen" },
        this.whenIReceiveMenuopen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MenuClose" },
        this.whenIReceiveMenuclose
      ),
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
    this.goto(-102, -52);
    this.visible = false;
  }

  *whenIReceiveMenuopen() {
    this.visible = true;
    this.goto(-102, -105);
    yield* this.glide(0.2, -102, -52);
  }

  *whenIReceiveMenuclose() {
    this.goto(-102, -52);
    yield* this.glide(0.2, -102, -79);
    this.visible = false;
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
