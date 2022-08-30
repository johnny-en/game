import { onMounted, onUnmounted } from "vue";
import { game } from "@/game";

export function planeMove(planeInfo) {
  const speed = 10;

  const leftAndRightArr = [];
  const upAndDownArr = [];

  // 命令对象
  const upCommand = {
    type: "upAndDown",
    name: "up",
    dir: -1,
  };
  const downCommand = {
    type: "upAndDown",
    name: "down",
    dir: 1,
  };
  const leftCommand = {
    type: "leftAndRight",
    name: "left",
    dir: -1,
  };
  const rightCommand = {
    type: "leftAndRight",
    name: "right",
    dir: 1,
  };

  // 映射
  const map = {
    ArrowUp: upCommand,
    ArrowDown: downCommand,
    ArrowLeft: leftCommand,
    ArrowRight: rightCommand,
  };

  const getArrByCommand = (command) => {
    if (command.type === "leftAndRight") {
      return leftAndRightArr;
    } else {
      return upAndDownArr;
    }
  };

  const addCommand = (command) => {
    const arr = getArrByCommand(command);
    arr.unshift(command);
  };

  const removeCommand = (command) => {
    const arr = getArrByCommand(command);
    const index = arr.indexOf(command);
    arr.splice(index, 1);
  };

  const isExistCommand = (command) => {
    const arr = getArrByCommand(command);
    return arr.includes(command);
  };

  const handleKeyup = (e) => {
    const command = map[e.code];
    if (command && isExistCommand(command)) {
      removeCommand(command);
    }
  };
  const handleKeydown = (e) => {
    const command = map[e.code];
    if (command && !isExistCommand(command)) {
      addCommand(command);
    }
  };
  const handleTicker = () => {
    const leftAndRightCommand = leftAndRightArr[0];
    if (leftAndRightCommand) {
      planeInfo.x += leftAndRightCommand.dir * speed;
    }
    const upAndDownCommand = upAndDownArr[0];
    if (upAndDownCommand) {
      planeInfo.y += upAndDownCommand.dir * speed;
    }
  };

  onMounted(() => {
    game.ticker.add(handleTicker);
    window.addEventListener("keyup", handleKeyup);
    window.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    game.ticker.remove(handleTicker);
    window.removeEventListener("keyup", handleKeyup);
    window.removeEventListener("keydown", handleKeydown);
  });

  // let leftAndRightKeyCode = "";
  // let upAndDownKeyCode = "";

  // const handleKeyup = (e) => {
  //   if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
  //     leftAndRightKeyCode = "";
  //   }
  //   if (e.code === "ArrowUp" || e.code === "ArrowDown") {
  //     upAndDownKeyCode = "";
  //   }
  // };
  // const handleKeydown = (e) => {
  //   if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
  //     leftAndRightKeyCode = e.code;
  //   }
  //   if (e.code === "ArrowUp" || e.code === "ArrowDown") {
  //     upAndDownKeyCode = e.code;
  //   }
  // };

  // const handleTicker = () => {
  //   if (
  //     leftAndRightKeyCode === "ArrowLeft" ||
  //     leftAndRightKeyCode === "ArrowRight"
  //   ) {
  //     if (leftAndRightKeyCode === "ArrowLeft") {
  //       planeInfo.x -= speed;
  //     } else {
  //       planeInfo.x += speed;
  //     }
  //   }
  //   if (upAndDownKeyCode === "ArrowUp" || upAndDownKeyCode === "ArrowDown") {
  //     if (upAndDownKeyCode === "ArrowUp") {
  //       planeInfo.y -= speed;
  //     } else {
  //       planeInfo.y += speed;
  //     }
  //   }
  //   // switch (keyCode) {
  //   //   case "ArrowUp":
  //   //     planeInfo.y -= speed;
  //   //     break;
  //   //   case "ArrowDown":
  //   //     planeInfo.y += speed;
  //   //     break;
  //   //   case "ArrowLeft":
  //   //     planeInfo.x -= speed;
  //   //     break;
  //   //   case "ArrowRight":
  //   //     planeInfo.x += speed;
  //   //     break;
  //   // }
  // };
}
