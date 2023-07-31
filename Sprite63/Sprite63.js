/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite63 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite63/costumes/costume1.svg", {
        x: 11.577302500000002,
        y: 11.740212499999984
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite63/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SentryWeb" },
        this.whenIReceiveSentryweb
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Storecls" },
        this.whenIReceiveStorecls
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(87, 55);
    this.visible = false;
  }

  *whenIReceiveSentryweb() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("SentryWebClose");
    this.visible = false;
  }

  *whenIReceiveStorecls() {
    this.visible = false;
  }
}
