import { Mutations } from 'vuex-smart-module';
import VkUserState from './state';

class VkUserMutations extends Mutations<VkUserState> {
  public setCurrentUser(data: any) {
    this.state.currentUser = data;
  }

  public setUserFriends(data: any) {
    this.state.friends = data;
  }

  public clearState() {
    this.state.currentUser = null;
    this.state.friends = [];
  }
}

export default VkUserMutations;
