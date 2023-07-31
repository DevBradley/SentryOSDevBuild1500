/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite29 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite29/costumes/costume1.svg", {
        x: 20.28604377652158,
        y: 33.94747833804411
      }),
      new Costume("costume2", "./Sprite29/costumes/costume2.svg", {
        x: 28.58731676804237,
        y: 19.235818776521597
      }),
      new Costume("costume3", "./Sprite29/costumes/costume3.svg", {
        x: 20.371398907980392,
        y: 18.512400040834848
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite29/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Storeopen" },
        this.whenIReceiveStoreopen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Storecls" },
        this.whenIReceiveStorecls
      ),
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
        { name: "SentryWebClose" },
        this.whenIReceiveSentrywebclose
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SentryWeb" },
        this.whenIReceiveSentryweb
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.goto(-82, 41);
    this.visible = false;
  }

  *whenIReceiveStoreopen() {
    yield* this.wait(1);
    if (this.toNumber(this.stage.vars.nowifi) === 1) {
      this.visible = false;
    }
    if (this.toNumber(this.stage.vars.nowifi) === 0) {
      this.visible = true;
    }
  }

  *whenIReceiveStorecls() {
    this.visible = false;
  }

  *whenIReceiveSentryfiles() {
    this.costume = "costume2";
    this.goto(-82, 52);
  }

  *whenIReceiveSentryfilesO() {
    this.costume = "costume1";
    this.goto(-82, 41);
  }

  *whenIReceiveSentrywebclose() {
    this.costume = "costume1";
    this.goto(-82, 41);
  }

  *whenIReceiveSentryweb() {
    this.costume = "costume3";
    this.goto(-82, 52);
  }
}
