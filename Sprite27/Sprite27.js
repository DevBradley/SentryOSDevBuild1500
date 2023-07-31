/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite27 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite27/costumes/costume1.svg", {
        x: 120.770425,
        y: 80.43296500000002
      }),
      new Costume("costume2", "./Sprite27/costumes/costume2.svg", {
        x: 120.77043499999999,
        y: 93.07551500000004
      }),
      new Costume("costume3", "./Sprite27/costumes/costume3.svg", {
        x: 120.77042500000002,
        y: 93.075505
      }),
      new Costume("costume4", "./Sprite27/costumes/costume4.svg", {
        x: 120.77043499999999,
        y: 93.07551500000004
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite27/sounds/pop.wav")];

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
        { name: "wifioff" },
        this.whenIReceiveWifioff
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "storenowifi" },
        this.whenIReceiveStorenowifi
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SentryWeb" },
        this.whenIReceiveSentryweb
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SentryWebClose" },
        this.whenIReceiveSentrywebclose
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStoreopen() {
    this.moveBehind();
    this.goto(0, 7);
    this.visible = true;
    this.costume = "costume1";
    yield* this.wait(1);
    this.costume = "costume2";
  }

  *whenIReceiveStorecls() {
    this.visible = false;
  }

  *whenIReceiveSentryfiles() {
    this.costume = "costume3";
  }

  *whenIReceiveSentryfilesO() {
    this.costume = "costume2";
  }

  *whenIReceiveWifioff() {
    yield* this.broadcastAndWait("storenowifi");
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.toNumber(this.stage.vars.nowifi) === 1) {
        this.costume = "costume4";
        this.broadcast("wifioff");
      }
      yield;
    }
  }

  *whenIReceiveStorenowifi() {
    this.costume = "costume4";
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.toNumber(this.stage.vars.nowifi) === 0) {
        this.costume = "costume1";
        this.broadcast("wifion");
        return;
      }
      yield;
    }
  }

  *whenIReceiveSentryweb() {
    this.costume = "costume3";
  }

  *whenIReceiveSentrywebclose() {
    this.costume = "costume2";
  }
}
