/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite24 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite24/costumes/costume1.svg", {
        x: 27.374635000000012,
        y: 9.520912342122415
      }),
      new Costume("costume2", "./Sprite24/costumes/costume2.svg", {
        x: 27.374615000000006,
        y: 9.520912342122472
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite24/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Poweroptions" },
        this.whenIReceivePoweroptions
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
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
        { name: "dark theme" },
        this.whenIReceiveDarkTheme
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "light theme" },
        this.whenIReceiveLightTheme
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.goto(-206, 138);
    this.visible = false;
  }

  *whenIReceivePoweroptions() {
    yield* this.wait(0.1);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Start");
    this.broadcast("Storecls");
    this.broadcast("Settingscls");
    this.broadcast("Filesclose");
    this.broadcast("Storecls");
    this.stage.costume = "backdrop4";
    this.broadcast("OffSig");
    this.visible = false;
    this.broadcast("Storecls");
    this.broadcast("Settingscls");
  }

  *whenIReceiveNooptionpower() {
    this.visible = false;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }

  *whenIReceiveDarkTheme() {
    this.costume = "costume2";
  }

  *whenIReceiveLightTheme() {
    this.costume = "costume1";
  }
}
