import { Actions } from 'vuex-smart-module';
import VkAuthState from './state';
import VkAuthGetters from './getters';
import VkAuthMutations from './mutations';

class VkAuthActions extends Actions<
  VkAuthState,
  VkAuthGetters,
  VkAuthMutations,
  VkAuthActions
> {
  public async getLoginStatus(): Promise<IAuthAuthorizedResponse | IAuthUnauthorizedResponse> {
    return new Promise((resolve, reject) => {
      VK.Auth.getLoginStatus((data: IAuthAuthorizedResponse | IAuthUnauthorizedResponse) => {
        if (data) {
          this.commit('setLoginStatus', data);
          resolve(data);
        } else {
          reject();
        }
      });
    });
  }

  public logout(): Promise<IAuthUnauthorizedResponse> {
    return new Promise((resolve, reject) => {
      VK.Auth.logout((data:IAuthUnauthorizedResponse) => {
        if (data) {
          this.commit('setLoginStatus', data);
          resolve(data);
        } else {
          reject();
        }
      });
    });
  }

  public revokeGrants(): Promise<IAuthUnauthorizedResponse> {
    return new Promise((resolve, reject) => {
      VK.Auth.revokeGrants((data:IAuthUnauthorizedResponse) => {
        if (data) {
          this.commit('setLoginStatus', data);
          resolve(data);
        } else {
          reject();
        }
      });
    });
  }
}

export default VkAuthActions;
