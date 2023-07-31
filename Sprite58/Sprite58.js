/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite58 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite58/costumes/costume1.svg", {
        x: 30.30160439715496,
        y: 23.87763208896203
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite58/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Files" }, this.whenIReceiveFiles),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Filesclose" },
        this.whenIReceiveFilesclose
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.thingInstalled = 0;
    this.goto(-21, -31);
    this.visible = false;
  }

  *whenIReceiveFiles() {
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveFilesclose() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.vars.thingInstalled++;
    this.broadcast("thing.program");
  }
}
