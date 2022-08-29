import { random } from "@/utils";
export default {
  enemy: {
    speed() {
      return random(4, 6);
    },
  },
  plane: {
    bullet: {
      speed: 10,
    },
  },
};
