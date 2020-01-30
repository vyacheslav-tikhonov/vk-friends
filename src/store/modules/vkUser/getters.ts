import { Getters } from 'vuex-smart-module';
import VkUserState from './state';

class VkUserGetters  extends Getters<VkUserState> {
  get currentUser() {
    return this.state.currentUser;
  }

  get friends() {
    return this.state.friends;
  }
}

export default VkUserGetters;
