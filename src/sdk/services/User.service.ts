import { User } from "../@types";
import Service from "../Service";

class userService extends Service {
  static getAllEditors() {
    return this.Http.get<User.EditorSummary[]>("/users/editors").then(
      this.getData
    );
  }
}

export default userService;
