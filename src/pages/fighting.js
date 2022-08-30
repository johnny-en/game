import { onMounted, onUnmounted } from "vue";
import { game } from "@/game";
import { hitTest } from "@/utils";
export function useFighting({
  planeInfo,
  enemys,
  bullets,
  gameover,
  distoryBullet,
  hitEnemy,
}) {
  const handleTicker = () => {
    // 我方飞机和敌方飞机碰撞
    enemys.forEach((enemy) => {
      if (hitTest(planeInfo, enemy)) {
        gameover();
      }
    });

    // 我方子弹和敌方飞机碰撞
    enemys.forEach((enemy, eIndex) => {
      bullets.forEach((bullet, bIndex) => {
        if (hitTest(bullet, enemy)) {
          hitEnemy(enemy, eIndex);
          distoryBullet(bIndex);
        }
      });
    });
  };
  onMounted(() => {
    game.ticker.add(handleTicker);
  });
  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });
}
