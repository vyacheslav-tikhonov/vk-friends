import { Getters } from 'vuex-smart-module';
import VkAuthState from './state';

class VkAuthGetters  extends Getters<VkAuthState> {
  get status(): TStatus {
    return this.state.status;
  }

  get session(): ISession | null {
    return this.state.session;
  }
}

export default VkAuthGetters;
