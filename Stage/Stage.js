/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 381.3442654079861,
        y: 246.33186500709695
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 284.17178614227674,
        y: 195.871909461862
      }),
      new Costume("backdrop7", "./Stage/costumes/backdrop7.svg", {
        x: 284.171775,
        y: 195.8719098582466
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 359.4354731499676,
        y: 258.81458499999997
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 289.13865647874434,
        y: 229.77875947236294
      }),
      new Costume("Blue", "./Stage/costumes/Blue.svg", {
        x: 254.00784458506567,
        y: 194.80649722155042
      }),
      new Costume("The long drive", "./Stage/costumes/The long drive.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.svg", {
        x: 282.2967620941254,
        y: 211.3259805215372
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.svg", {
        x: 348.16661611017264,
        y: 225.78776323057446
      }),
      new Costume("Disk", "./Stage/costumes/Disk.svg", {
        x: 278.02702702702703,
        y: 210.45945945945945
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bckgrndchng" },
        this.whenIReceiveBckgrndchng
      ),
      new Trigger(Trigger.BROADCAST, { name: "Bgc2" }, this.whenIReceiveBgc2),
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

    this.vars.fileManagerInstalled = 1;
    this.vars.nowifi = 0;
    this.vars.thingInstalled = 0;
    this.vars.diskutils = 0;
    this.vars.boot = 1;
    this.vars.sentrywebinstalled = 1;

    this.watchers.fileManagerInstalled = new Watcher({
      label: "File manager installed",
      style: "normal",
      visible: false,
      value: () => this.vars.fileManagerInstalled,
      x: 240,
      y: 147
    });
    this.watchers.nowifi = new Watcher({
      label: "nowifi",
      style: "normal",
      visible: false,
      value: () => this.vars.nowifi,
      x: 240,
      y: 125
    });
    this.watchers.thingInstalled = new Watcher({
      label: "thing installed",
      style: "normal",
      visible: false,
      value: () => this.vars.thingInstalled,
      x: 240,
      y: 102
    });
    this.watchers.sentrywebinstalled = new Watcher({
      label: "SentryWebInstalled",
      style: "normal",
      visible: false,
      value: () => this.vars.sentrywebinstalled,
      x: 245,
      y: 175
    });
  }

  *whenIReceiveBckgrndchng() {
    this.costume = "backdrop2";
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    this.costume = "Blue";
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
  }

  *whenIReceiveBgc2() {
    this.costume = "Blue";
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    this.costume = "backdrop2";
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
  }

  *whenIReceiveDarkTheme() {
    this.costume = "backdrop2";
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    this.costume = "backdrop7";
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
  }

  *whenIReceiveLightTheme() {
    this.costume = "backdrop7";
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    yield* this.wait(0.1);
    this.effects.ghost += 25;
    this.costume = "backdrop2";
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
    yield* this.wait(0.1);
    this.effects.ghost -= 25;
  }
}
