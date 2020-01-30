import { Mutations } from 'vuex-smart-module';
import VkAuthState from './state';

class VkAuthMutations extends Mutations<VkAuthState> {
  public setLoginStatus(data: IAuthAuthorizedResponse | IAuthUnauthorizedResponse) {
    this.state.status = data.status;
    this.state.session = data.session;
  }
}

export default VkAuthMutations;
