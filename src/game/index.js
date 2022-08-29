import { Application } from "pixi.js";

// 初始化游戏
export const game = new Application({
  width: 750,
  height: 1080,
});

document.body.append(game.view);

export function getRootContainer() {
  return game.stage;
}
