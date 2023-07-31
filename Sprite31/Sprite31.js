/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite31 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite31/costumes/costume1.svg", {
        x: 11.577302500000002,
        y: 11.740212499999984
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite31/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sentryfiles" },
        this.whenIReceiveSentryfiles
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

  *whenIReceiveSentryfiles() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Sentryfiles o");
    this.visible = false;
  }

  *whenIReceiveStorecls() {
    this.visible = false;
  }
}
