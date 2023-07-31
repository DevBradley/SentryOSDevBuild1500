/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite30 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite30/costumes/costume1.svg", {
        x: 18.178494999999998,
        y: 17.89274499999999
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite30/sounds/pop.wav")];

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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sentryfiles o" },
        this.whenIReceiveSentryfilesO
      ),
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
        { name: "storenowifi" },
        this.whenIReceiveStorenowifi
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Storeopen" },
        this.whenIReceiveStoreopen2
      ),
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
    this.goto(-88, -38);
    this.visible = false;
  }

  *whenIReceiveStoreopen() {
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveStorecls() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Sentryfiles");
    this.visible = false;
  }

  *whenIReceiveSentryfilesO() {
    this.visible = true;
  }

  *whenIReceiveLogout() {
    this.visible = false;
  }

  *whenIReceiveOffsig() {
    this.visible = false;
  }

  *whenIReceiveStorenowifi() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.goto(-93, -27);
      if (this.toNumber(this.stage.vars.nowifi) === 1) {
        this.broadcast("wifioff");
      }
      yield;
    }
  }

  *whenIReceiveStoreopen2() {
    yield* this.wait(1);
    if (this.toNumber(this.stage.vars.nowifi) === 1) {
      this.visible = false;
    }
    if (this.toNumber(this.stage.vars.nowifi) === 0) {
      this.visible = true;
    }
  }

  *whenIReceiveSentryweb() {
    this.visible = false;
  }

  *whenIReceiveSentrywebclose() {
    this.visible = true;
  }
}
