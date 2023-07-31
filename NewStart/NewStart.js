/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewStart extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./NewStart/costumes/costume1.svg", {
        x: 36.39972514500889,
        y: 36.737569220138
      }),
      new Costume("costume2", "./NewStart/costumes/costume2.svg", {
        x: 36.39972499999999,
        y: 36.737570000000005
      })
    ];

    this.sounds = [
      new Sound("start", "./NewStart/sounds/start.wav"),
      new Sound(
        "my beatboxing but sped up and robotized",
        "./NewStart/sounds/my beatboxing but sped up and robotized.wav"
      ),
      new Sound(
        "my beatboxing 2 but not modified",
        "./NewStart/sounds/my beatboxing 2 but not modified.wav"
      ),
      new Sound(
        "my beatboxing 2 but modified2",
        "./NewStart/sounds/my beatboxing 2 but modified2.wav"
      ),
      new Sound(
        "my hum but modified (sounds like a train ngl)",
        "./NewStart/sounds/my hum but modified (sounds like a train ngl).wav"
      ),
      new Sound("recording1", "./NewStart/sounds/recording1.wav"),
      new Sound("New Start", "./NewStart/sounds/New Start.wav"),
      new Sound("recording2", "./NewStart/sounds/recording2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Notification" },
        this.whenIReceiveNotification
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DiskStart" },
        this.whenIReceiveDiskstart
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.diskutils = 0;
    while (!(this.toNumber(this.stage.vars.diskutils) === 0)) {
      yield;
    }
    this.stage.vars.boot = 0;
    this.visible = true;
    this.stage.costume = "backdrop1";
    yield* this.startSound("New Start");
    this.costume = "costume1";
    this.goto(0, 0);
    yield* this.wait(0.5);
    yield* this.glide(0.2, -58, 0);
    this.costume = "costume2";
    yield* this.wait(3);
    this.broadcast("Start");
    this.stage.vars.boot = 1;
    this.stage.costume = "backdrop2";
    this.visible = false;
  }

  *whenIReceiveNotification() {
    yield* this.playSoundUntilDone("recording1");
    return;
  }

  *whenKeyDPressed() {
    if (this.toNumber(this.stage.vars.boot) === 0) {
      this.stage.vars.diskutils = 1;
      this.broadcast("DiskUtils");
      this.stage.costume = "Disk";
      this.visible = false;
    }
    if (this.toNumber(this.stage.vars.boot) === 1) {
      0;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.toNumber(this.stage.vars.diskutils) === 1) {
        this.stopAllSounds();
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveDiskstart() {
    this.visible = true;
    this.stage.costume = "backdrop1";
    yield* this.startSound("New Start");
    this.costume = "costume1";
    this.goto(0, 0);
    yield* this.wait(0.5);
    yield* this.glide(0.2, -58, 0);
    this.costume = "costume2";
    yield* this.wait(3);
    this.broadcast("Start");
    this.visible = false;
  }
}
