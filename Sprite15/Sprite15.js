/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite15 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume", "./Sprite15/costumes/costume.svg", {
        x: 63.33435863971715,
        y: 45.76668307871691
      }),
      new Costume(
        "Build3060()4_162603_1",
        "./Sprite15/costumes/Build3060()4_162603_1.svg",
        { x: 65.01165175254039, y: 48.4690387940401 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite15/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settingscls" },
        this.whenIReceiveSettingscls
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings" },
        this.whenIReceiveSettings
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Bgc2" }, this.whenIReceiveBgc2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Wlpprsctn" },
        this.whenIReceiveWlpprsctn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Wlpprcls" },
        this.whenIReceiveWlpprcls
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
    this.costume = "costume";
    this.visible = false;
  }

  *whenIReceiveSettingscls() {
    this.visible = false;
  }

  *whenIReceiveSettings() {
    this.goto(39, 26);
    yield* this.wait(1);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "Blue";
    this.costume = "costume";
    this.broadcast("Bckgrndchng");
    this.moveAhead();
    this.visible = false;
  }

  *whenIReceiveBgc2() {
    this.visible = true;
  }

  *whenIReceiveWlpprsctn() {
    this.visible = true;
  }

  *whenIReceiveWlpprcls() {
    this.visible = false;
  }

  *whenIReceiveDarkTheme() {
    if (this.stage.costumeNumber === 2) {
      this.stage.costume = "backdrop7";
    }
  }

  *whenIReceiveLightTheme() {
    if (this.stage.costumeNumber === 2) {
      this.stage.costume = "backdrop2";
    }
  }
}
