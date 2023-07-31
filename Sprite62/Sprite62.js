/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite62 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite62/costumes/costume1.svg", {
        x: 36.91502860725919,
        y: 13.087020874023438
      }),
      new Costume("costume2", "./Sprite62/costumes/costume2.svg", {
        x: 36.91503000000003,
        y: 13.087019999999995
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite62/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SentryWeb" },
        this.whenIReceiveSentryweb
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Storecls" },
        this.whenIReceiveStorecls
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "storenowifi" },
        this.whenIReceiveStorenowifi
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SentryWebClose" },
        this.whenIReceiveSentrywebclose
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.sentrywebinstalled = 0;
    this.costume = "costume1";
    this.goto(-81, 11);
    this.visible = false;
  }

  *whenIReceiveSentryweb() {
    this.visible = true;
  }

  *whenIReceiveStorecls() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("SentryWebDownload");
    this.costume = "costume2";
    this.stage.vars.sentrywebinstalled = 1;
  }

  *whenIReceiveStorenowifi() {
    this.visible = false;
  }

  *whenIReceiveSentrywebclose() {
    this.visible = false;
  }
}
