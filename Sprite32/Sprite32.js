/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite32 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite32/costumes/costume1.svg", {
        x: 36.91502860725919,
        y: 13.087020874023438
      }),
      new Costume("costume2", "./Sprite32/costumes/costume2.svg", {
        x: 36.91503000000003,
        y: 13.087019999999995
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite32/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sentryfiles" },
        this.whenIReceiveSentryfiles
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sentryfiles o" },
        this.whenIReceiveSentryfilesO
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Storecls" },
        this.whenIReceiveStorecls
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings" },
        this.whenIReceiveSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "storenowifi" },
        this.whenIReceiveStorenowifi
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.fileManagerInstalled = 0;
    this.costume = "costume1";
    this.goto(-81, 11);
    this.visible = false;
  }

  *whenIReceiveSentryfiles() {
    this.visible = true;
  }

  *whenIReceiveSentryfilesO() {
    this.visible = false;
  }

  *whenIReceiveStorecls() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Sfdown");
    this.costume = "costume2";
    this.stage.vars.fileManagerInstalled = 1;
  }

  *whenIReceiveSettings() {
    this.broadcast("Storecls");
  }

  *whenIReceiveStorenowifi() {
    this.visible = false;
  }
}
